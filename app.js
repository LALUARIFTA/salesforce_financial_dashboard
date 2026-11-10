// app.js — Salesforce Financial Workspace application logic.
// Reads MENU_DATA from data.js and renders the interactive dashboard.
    // Current Application State
    let currentMenuKey = 'invoices';
    let currentSubMenuId = 'unpaid';
    let selectedItemId = '427-012'; // Default active item matching the reference screenshot
    let activeGateway = 'stripe';
    let sortAscending = false;

    const startMonths = ['November 2023', 'October 2023', 'September 2023', 'August 2023'];
    const endMonths = ['December 2023', 'January 2024', 'February 2024', 'March 2024'];
    let startMonthIdx = 0;
    let endMonthIdx = 0;

    // Format Currency Helper
    function formatMoney(num) {
      return Number(num).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }

    // Smooth Animated Number Counter
    function animateNumber(elementId, targetValue, isCurrency = true, duration = 520) {
      const el = document.getElementById(elementId);
      if (!el) return;
      const startText = el.innerText.replace(/,/g, '');
      const startValue = parseFloat(startText) || 0;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
        const current = startValue + (targetValue - startValue) * eased;

        if (isCurrency) {
          el.innerText = formatMoney(current);
        } else {
          el.innerText = Math.round(current);
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    }

    // Position the Animated Sliding Pill on the Top Navigation Bar
    function updateTopNavPill(menuKey) {
      const container = document.getElementById('mainMenuContainer');
      const pill = document.getElementById('topNavPill');
      const buttons = container.querySelectorAll('.main-nav-btn');

      buttons.forEach(btn => {
        const key = btn.getAttribute('data-menu');
        const dot = btn.querySelector('.nav-dot');
        if (key === menuKey) {
          btn.classList.remove('text-gray-600');
          btn.classList.add('text-[#111415]');
          dot.classList.remove('hidden');

          const offsetLeft = btn.offsetLeft;
          const width = btn.offsetWidth;
          pill.style.width = `${width}px`;
          pill.style.transform = `translateX(${offsetLeft}px)`;
        } else {
          btn.classList.remove('text-[#111415]');
          btn.classList.add('text-gray-600');
          dot.classList.add('hidden');
        }
      });
    }

    // Switch Main Menu (Estimates, Invoices, Payments, Recurring Invoices, Checkouts)
    function switchMainMenu(menuKey) {
      if (!MENU_DATA[menuKey]) return;
      currentMenuKey = menuKey;
      const menuObj = MENU_DATA[menuKey];
      currentSubMenuId = menuObj.defaultSubMenu;

      // Update Top Sliding Pill
      updateTopNavPill(menuKey);

      // Trigger Workspace Transition Animation while keeping strict fixed frame size
      const workspace = document.getElementById('menuWorkspace');
      workspace.classList.remove('animate-menu-enter');
      void workspace.offsetWidth; // Force reflow
      workspace.classList.add('animate-menu-enter');

      // Update Header & Labels
      document.getElementById('pageTitle').innerText = menuObj.title;
      document.getElementById('createBtnLabel').innerText = menuObj.createBtn;
      document.getElementById('detailTypeLabel').innerText = menuObj.detailType;
      document.getElementById('detailPrimaryActionBtn').innerText = menuObj.primaryAction;

      // Update KPI Labels & Animate Numbers
      document.getElementById('kpi1Label').innerText = menuObj.kpi1.label;
      animateNumber('kpi1Value', menuObj.kpi1.amount, true);

      document.getElementById('kpi2Label').innerText = menuObj.kpi2.label;
      animateNumber('kpi2Value', menuObj.kpi2.amount, true);

      document.getElementById('kpi3Label').innerText = menuObj.kpi3.label;
      animateNumber('kpi3Value', menuObj.kpi3.value, false);
      document.getElementById('kpi3Unit').innerText = menuObj.kpi3.unit;

      // Update Timeline Progress Bars
      document.getElementById('bar1Fill').style.width = `${menuObj.bars.b1}%`;
      document.getElementById('bar2Fill').style.width = `${menuObj.bars.b2}%`;
      document.getElementById('bar3Fill').style.width = `${menuObj.bars.b3}%`;

      // Update Instant Payout Card
      document.getElementById('payoutTitle').innerText = menuObj.payout.title;
      animateNumber('payoutAmount', menuObj.payout.amount, true);
      document.getElementById('payoutBadge').innerText = menuObj.payout.badge;

      // Select default item for this menu
      if (menuKey === 'invoices') {
        selectedItemId = '427-012';
      } else if (menuObj.items.length > 0) {
        selectedItemId = menuObj.items[0].id;
      }

      // Render Sub-Menu Notch & Scrollable List
      renderSubMenuNotch();
      renderScrollableList();
      renderDetailCard();
    }

    // Render Top-Center Dark Notch Sub-Menu Tabs
    function renderSubMenuNotch() {
      const menuObj = MENU_DATA[currentMenuKey];
      const notch = document.getElementById('subMenuNotch');

      // Calculate dynamic counts
      const allCount = menuObj.items.length;
      const draftCount = menuObj.items.filter(i => i.subGroup === 'draft').length;
      const unpaidCount = menuObj.items.filter(i => i.subGroup === 'unpaid').length;

      const countsMap = {
        all: allCount,
        draft: draftCount,
        unpaid: unpaidCount
      };

      notch.innerHTML = menuObj.subMenus.map(sub => {
        const isActive = sub.id === currentSubMenuId;
        const countVal = countsMap[sub.id] ?? sub.count;

        if (isActive) {
          return `
            <button onclick="switchSubMenu('${sub.id}')" 
                    class="px-3.5 py-1.5 rounded-full bg-limeAccent text-[#111415] text-[11.5px] font-bold flex items-center gap-2 shadow-md transition-all duration-300 scale-105">
              <span>${sub.label}</span>
              <span class="w-4 h-4 rounded-full bg-[#141718] text-white text-[10px] font-bold flex items-center justify-center">${countVal}</span>
            </button>
          `;
        } else {
          return `
            <button onclick="switchSubMenu('${sub.id}')" 
                    class="px-3.5 py-1.5 rounded-full bg-[#1e2224] hover:bg-[#272c2f] text-gray-300 hover:text-white text-[11.5px] font-medium flex items-center gap-1.5 transition-all duration-200">
              <span>${sub.label}</span>
              <span class="px-1.5 py-0.2 rounded-full bg-white/10 text-gray-300 text-[10px] font-semibold">${countVal}</span>
            </button>
          `;
        }
      }).join('');
    }

    // Switch Sub-Menu Tab inside the Center Notch
    function switchSubMenu(subId) {
      currentSubMenuId = subId;
      renderSubMenuNotch();

      const filtered = getFilteredItems();
      if (filtered.length > 0 && !filtered.some(i => i.id === selectedItemId)) {
        selectedItemId = filtered[0].id;
      }

      renderScrollableList();
      renderDetailCard();
    }

    // Filter Items by Sub-Menu, Customer, Status, and Live Search
    function getFilteredItems() {
      const menuObj = MENU_DATA[currentMenuKey];
      const custFilter = document.getElementById('customerFilter').value;
      const statFilter = document.getElementById('statusFilter').value;
      const searchVal = document.getElementById('searchInput').value.trim().toLowerCase();

      let list = menuObj.items.filter(item => {
        if (currentSubMenuId !== 'all' && item.subGroup !== currentSubMenuId) return false;
        if (custFilter !== 'all' && !item.company.toLowerCase().includes(custFilter.toLowerCase())) return false;
        if (statFilter !== 'all' && item.status.toLowerCase() !== statFilter.toLowerCase()) return false;
        if (searchVal) {
          const matchId = item.id.toLowerCase().includes(searchVal);
          const matchComp = item.company.toLowerCase().includes(searchVal);
          const matchCust = item.customer.toLowerCase().includes(searchVal);
          if (!matchId && !matchComp && !matchCust) return false;
        }
        return true;
      });

      return list;
    }

    // Render Left Column Scrollable Item List
    function renderScrollableList() {
      const menuObj = MENU_DATA[currentMenuKey];
      const activeSubObj = menuObj.subMenus.find(s => s.id === currentSubMenuId) || menuObj.subMenus[0];
      const listContainer = document.getElementById('scrollableItemList');

      // Update section header
      const headerTitle = currentMenuKey === 'invoices' && currentSubMenuId === 'unpaid'
        ? 'Unpaid Invoices'
        : `${activeSubObj.label} — ${menuObj.title}`;
      document.getElementById('listSectionTitle').innerText = headerTitle;

      const items = getFilteredItems();
      document.getElementById('listCountIndicator').innerText = `${items.length} items • Scrollable`;

      if (items.length === 0) {
        listContainer.innerHTML = `
          <div class="h-48 flex flex-col items-center justify-center text-center px-4">
            <p class="text-xs font-semibold text-gray-500 mb-2">No matching records found in this view</p>
            <button onclick="resetFilters()" class="px-3 py-1.5 rounded-full bg-[#181b1c] text-white text-[11px] font-semibold hover:bg-black transition-all">
              Reset Filters
            </button>
          </div>
        `;
        return;
      }

      listContainer.innerHTML = items.map((item, idx) => {
        const isSelected = item.id === selectedItemId;
        const delayMs = Math.min(idx * 25, 200);

        if (isSelected) {
          // Selected Dark Pill Row matching #427-012 in the reference screenshot
          return `
            <div onclick="selectRecord('${item.id}')" 
                 style="animation-delay: ${delayMs}ms"
                 class="animate-list-item cursor-pointer bg-[#181b1c] text-white rounded-full px-3.5 py-2.5 flex items-center justify-between shadow-lg transition-all duration-200">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${item.avatar}" 
                     onerror="this.src='https://placehold.co/60x60/24292c/fff?text=SF'"
                     class="w-9 h-9 rounded-full object-cover ring-2 ring-limeAccent shrink-0" />
                <div class="min-w-0">
                  <p class="text-[12.5px] font-bold text-white leading-tight truncate"># ${item.id}</p>
                  <p class="text-[11px] text-gray-400 font-medium leading-tight mt-0.5">${item.dueText}</p>
                </div>
              </div>

              <span class="px-3 py-1 rounded-full bg-white text-[#141718] text-[11px] font-bold shadow-sm shrink-0">
                ${item.status}
              </span>

              <div class="text-right pr-1 shrink-0">
                <span class="text-[11px] text-gray-400 font-normal mr-0.5">$</span>
                <span class="text-[14.5px] font-bold text-white tracking-tight">${formatMoney(item.amount)}</span>
              </div>
            </div>
          `;
        } else {
          // Unselected Light Row
          return `
            <div onclick="selectRecord('${item.id}')" 
                 style="animation-delay: ${delayMs}ms"
                 class="animate-list-item cursor-pointer hover:bg-gray-200/75 rounded-full px-3.5 py-2 flex items-center justify-between transition-all duration-150 group">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${item.avatar}" 
                     onerror="this.src='https://placehold.co/60x60/e2e8f0/1e293b?text=SF'"
                     class="w-8 h-8 rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all shrink-0" />
                <div class="min-w-0">
                  <p class="text-[12px] font-bold text-[#141718] leading-tight truncate"># ${item.id}</p>
                  <p class="text-[10.5px] text-gray-500 font-medium leading-tight mt-0.5">${item.dueText}</p>
                </div>
              </div>

              <span class="px-2.5 py-0.5 rounded-full bg-white border border-gray-200/90 text-gray-600 text-[10.5px] font-semibold shrink-0">
                ${item.status}
              </span>

              <div class="text-right pr-1 shrink-0">
                <span class="text-[11px] text-gray-400 font-normal mr-0.5">$</span>
                <span class="text-[14px] font-semibold text-[#181b1c] tracking-tight">${formatMoney(item.amount)}</span>
              </div>
            </div>
          `;
        }
      }).join('');
    }

    // Select a Record from the Scrollable List
    function selectRecord(itemId) {
      selectedItemId = itemId;
      renderScrollableList();

      const detailCard = document.getElementById('detailCardContainer');
      detailCard.classList.remove('animate-detail-switch');
      void detailCard.offsetWidth;
      detailCard.classList.add('animate-detail-switch');

      renderDetailCard();
    }

    // Render the Right-Hand Dark Detail Breakdown Card
    function renderDetailCard() {
      const menuObj = MENU_DATA[currentMenuKey];
      const item = menuObj.items.find(i => i.id === selectedItemId) || menuObj.items[0];
      if (!item) return;

      document.getElementById('detailNumber').innerText = item.id;
      document.getElementById('detailStatusBadge').innerText = item.status;
      document.getElementById('detailCompany').innerText = item.company;
      document.getElementById('detailAvatar').src = item.avatar;
      document.getElementById('detailCustomerName').innerText = item.customer;
      document.getElementById('detailCustomerRole').innerText = item.role;

      // Render Breakdown Line Items Grid + Interactive '+' Card
      const grid = document.getElementById('detailLineItemsGrid');
      const cardsHTML = item.lineItems.map((li, idx) => `
        <div onclick="inspectMilestone(${idx})" 
             class="bg-[#212528] hover:bg-[#282d31] border border-white/[0.06] hover:border-limeAccent/40 rounded-[18px] p-3.5 h-[132px] flex flex-col justify-between cursor-pointer transition-all group">
          <div class="flex items-start justify-between gap-1">
            <p class="text-[13.5px] font-bold text-white tracking-tight">
              <span class="text-[11px] text-gray-400 font-normal mr-0.5">$</span>${formatMoney(li.amount)}
            </p>
            <span class="text-gray-400 group-hover:text-limeAccent transition-colors">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </div>
          <p class="text-[11px] text-gray-300 font-medium leading-snug line-clamp-2">${li.title}</p>
        </div>
      `).join('');

      // Append the diagonal-hatched '+' Add Milestone card matching the reference screenshot
      const addCardHTML = `
        <button onclick="openMilestoneModal()" 
                title="Add Service Milestone"
                class="hatched-card hover:border-limeAccent/50 border border-white/[0.07] rounded-[18px] h-[132px] flex items-center justify-center group transition-all active:scale-95">
          <span class="w-9 h-9 rounded-full bg-[#262b2f] group-hover:bg-limeAccent text-gray-300 group-hover:text-[#111415] flex items-center justify-center text-lg font-semibold transition-all shadow-md">
            +
          </span>
        </button>
      `;

      grid.innerHTML = cardsHTML + addCardHTML;

      // Animate Footer Totals
      animateNumber('detailSubTotal', item.amount, true, 360);
      animateNumber('detailTotal', item.amount, true, 360);
      animateNumber('detailBalance', item.status === 'Paid' ? 0 : item.amount, true, 360);
    }

    // Interactive Gateway Selection (*4443 Visa, #177210 Stripe, #711221 PayPal)
    function selectGateway(gatewayKey) {
      activeGateway = gatewayKey;
      const gateways = ['visa', 'stripe', 'paypal'];

      gateways.forEach(gw => {
        const el = document.getElementById(`gateway-${gw}`);
        if (gw === gatewayKey) {
          el.className = 'payout-card cursor-pointer flex-1 h-[92px] rounded-[16px] p-3 flex flex-col justify-between bg-limeAccent text-[#111415] shadow-lg shadow-limeAccent/10';
        } else {
          el.className = 'payout-card cursor-pointer flex-1 h-[76px] rounded-[16px] p-3 flex flex-col justify-between bg-[#252a2e] text-white border border-white/5 hover:border-white/20';
        }
      });

      const names = { visa: 'Visa Direct (*4443)', stripe: 'Stripe Instant (#177210)', paypal: 'PayPal Vault (#711221)' };
      showToast(`Payout gateway switched to ${names[gatewayKey]}`);
    }

    // Filter Handlers
    function applyFilters() {
      let activeCount = 2; // 2 date range pills active by default
      if (document.getElementById('customerFilter').value !== 'all') activeCount++;
      if (document.getElementById('statusFilter').value !== 'all') activeCount++;
      if (document.getElementById('searchInput').value.trim() !== '') activeCount++;

      document.getElementById('activeFilterBadge').innerText = activeCount;
      renderScrollableList();
    }

    function resetFilters() {
      document.getElementById('customerFilter').value = 'all';
      document.getElementById('statusFilter').value = 'all';
      document.getElementById('searchInput').value = '';
      document.getElementById('activeFilterBadge').innerText = '2';
      currentSubMenuId = 'all';
      renderSubMenuNotch();
      renderScrollableList();
      showToast('Filters reset — showing all records');
    }

    function filterByAvatarClient(companyKeyword) {
      const select = document.getElementById('customerFilter');
      const matchingOption = Array.from(select.options).find(opt => opt.value.toLowerCase() === companyKeyword.toLowerCase());
      if (matchingOption) {
        select.value = matchingOption.value;
        applyFilters();
        showToast(`Filtered records for ${companyKeyword}`);
      } else {
        document.getElementById('searchInput').value = companyKeyword;
        applyFilters();
        showToast(`Searching records for ${companyKeyword}`);
      }
    }

    function cycleStartMonth() {
      startMonthIdx = (startMonthIdx + 1) % startMonths.length;
      document.getElementById('startMonthLabel').innerText = startMonths[startMonthIdx];
      showToast(`Start period updated to ${startMonths[startMonthIdx]}`);
    }

    function cycleEndMonth() {
      endMonthIdx = (endMonthIdx + 1) % endMonths.length;
      document.getElementById('endMonthLabel').innerText = endMonths[endMonthIdx];
      showToast(`End period updated to ${endMonths[endMonthIdx]}`);
    }

    function toggleSortOrder() {
      sortAscending = !sortAscending;
      const menuObj = MENU_DATA[currentMenuKey];
      menuObj.items.sort((a, b) => sortAscending ? a.amount - b.amount : b.amount - a.amount);
      renderScrollableList();
      showToast(`Sorted ${menuObj.title} by amount (${sortAscending ? 'Low → High' : 'High → Low'})`);
    }

    // Create Record Modal Logic
    function openCreateModal() {
      const menuObj = MENU_DATA[currentMenuKey];
      document.getElementById('modalTitle').innerText = menuObj.createBtn.charAt(0).toUpperCase() + menuObj.createBtn.slice(1);
      document.getElementById('modalOverlay').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.add('hidden');
      document.getElementById('modalForm').reset();
    }

    function handleModalSubmit(e) {
      e.preventDefault();
      const company = document.getElementById('formCompany').value.trim();
      const customer = document.getElementById('formCustomer').value.trim();
      const due = document.getElementById('formDue').value.trim();
      const service = document.getElementById('formService').value.trim();
      const amount = parseFloat(document.getElementById('formAmount').value) || 15000;

      const randomId = `${Math.floor(460 + Math.random() * 39)}-${Math.floor(100 + Math.random() * 899)}`;
      const newRecord = {
        id: randomId,
        dueText: due,
        status: 'Unsent',
        subGroup: currentSubMenuId === 'draft' ? 'draft' : 'unpaid',
        amount: amount,
        company: company,
        customer: customer,
        role: `Executive • ${company}`,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        lineItems: [
          { title: service, amount: amount }
        ]
      };

      MENU_DATA[currentMenuKey].items.unshift(newRecord);
      selectedItemId = newRecord.id;
      closeModal();
      renderSubMenuNotch();
      renderScrollableList();
      renderDetailCard();
      showToast(`Created #${newRecord.id} for ${company} ($${formatMoney(amount)})`);
    }

    // Add Milestone to Current Record Modal Logic
    function openMilestoneModal() {
      document.getElementById('milestoneModalOverlay').classList.remove('hidden');
    }

    function closeMilestoneModal() {
      document.getElementById('milestoneModalOverlay').classList.add('hidden');
      document.getElementById('milestoneTitleInput').value = '';
      document.getElementById('milestoneAmountInput').value = '';
    }

    function handleAddMilestoneSubmit(e) {
      e.preventDefault();
      const title = document.getElementById('milestoneTitleInput').value.trim();
      const amt = parseFloat(document.getElementById('milestoneAmountInput').value) || 5000;

      const menuObj = MENU_DATA[currentMenuKey];
      const item = menuObj.items.find(i => i.id === selectedItemId);
      if (item) {
        item.lineItems.push({ title, amount: amt });
        item.amount += amt;
      }

      closeMilestoneModal();
      renderScrollableList();
      renderDetailCard();
      showToast(`Added "${title}" ($${formatMoney(amt)}) to #${selectedItemId}`);
    }

    function inspectMilestone(idx) {
      const item = MENU_DATA[currentMenuKey].items.find(i => i.id === selectedItemId);
      if (!item || !item.lineItems[idx]) return;
      const li = item.lineItems[idx];
      showToast(`${li.title}: $${formatMoney(li.amount)} • Verified deliverable`);
    }

    // Instant Payout & Record Actions
    function executeInstantPayout() {
      const menuObj = MENU_DATA[currentMenuKey];
      const gatewayLabels = { visa: 'Visa *4443', stripe: 'Stripe #177210', paypal: 'PayPal #711221' };
      showToast(`Instant Payout of $${formatMoney(menuObj.payout.amount)} initiated via ${gatewayLabels[activeGateway]}!`);
    }

    function processSelectedRecordPayout() {
      const menuObj = MENU_DATA[currentMenuKey];
      const item = menuObj.items.find(i => i.id === selectedItemId);
      if (!item) return;

      item.status = 'Paid';
      renderScrollableList();
      renderDetailCard();
      showToast(`#${item.id} (${item.company}) processed — $${formatMoney(item.amount)} settled!`);
    }

    function triggerInstantPayoutModal() {
      const menuObj = MENU_DATA[currentMenuKey];
      showQuickDrawer(
        'Instant Payout Engine',
        `Available balance of $${formatMoney(menuObj.payout.amount)} is eligible for sub-second settlement via Stripe (#177210), Visa Direct (*4443), or PayPal Vault (#711221).`
      );
    }

    function copyRecordLink() {
      const dummyInput = document.createElement('input');
      dummyInput.value = `https://pay.salesforce.com/invoice/${selectedItemId}`;
      document.body.appendChild(dummyInput);
      dummyInput.select();
      document.execCommand('copy');
      document.body.removeChild(dummyInput);
      showToast(`Direct payment link for #${selectedItemId} copied to clipboard`);
    }

    function downloadInvoiceSummary() {
      showToast(`Generating PDF statement for #${selectedItemId}... Ready!`);
    }

    function exportCurrentListCSV() {
      const items = getFilteredItems();
      showToast(`Exported ${items.length} records from ${MENU_DATA[currentMenuKey].title} view`);
    }

    function cyclePreviousMenu() {
      const keys = Object.keys(MENU_DATA);
      const idx = keys.indexOf(currentMenuKey);
      const prevKey = keys[(idx - 1 + keys.length) % keys.length];
      switchMainMenu(prevKey);
    }

    function resetToDefaultView() {
      switchMainMenu('invoices');
      showToast('Returned to Salesforce Invoices Workspace');
    }

    // Quick Popover Drawer & Toast Helpers
    function showQuickDrawer(title, body) {
      document.getElementById('drawerTitle').innerText = title;
      document.getElementById('drawerBody').innerText = body;
      document.getElementById('quickDrawer').classList.remove('hidden');
    }

    function closeQuickDrawer() {
      document.getElementById('quickDrawer').classList.add('hidden');
    }

    let toastTimeout = null;
    function showToast(message) {
      const banner = document.getElementById('toastBanner');
      document.getElementById('toastText').innerText = message;
      banner.classList.remove('opacity-0', 'translate-y-4');
      banner.classList.add('opacity-100', 'translate-y-0');

      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        banner.classList.remove('opacity-100', 'translate-y-0');
        banner.classList.add('opacity-0', 'translate-y-4');
      }, 3100);
    }

    // Initialize Application on Load
    window.addEventListener('DOMContentLoaded', () => {
      switchMainMenu('invoices');
      window.addEventListener('resize', () => updateTopNavPill(currentMenuKey));
    });
