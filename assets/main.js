/**
 * Stitch Store - Main Vanilla JavaScript
 * Zero dependencies, works on GitHub Pages direct drag-and-drop
 */

// Global Configuration
const CONFIG = {
  telegramUsername: 'stitch_support', // تغییر آی‌دی تلگرام به آی‌دی شما
  storeName: 'فروشگاه استیچ | Stitch',
  currency: 'تومان'
};

// Sample Curated Products Data
const PRODUCTS_DATA = [
  {
    id: 'stitch-01',
    name: 'هودی اورسایز سایبر استیچ',
    enName: 'Cyber Stitch Oversized Hoodie',
    category: 'hoodie',
    categoryName: 'هودی و دورس',
    price: 1380000,
    oldPrice: 1650000,
    rating: 4.9,
    badge: 'پرفروش',
    badgeType: 'purple',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    description: 'هودی گرم سه‌نخ خارخورده با گلدوزی اختصاصی لوگوی استیچ، کات آزاد اورسایز و تن‌خور مدرن استریت‌ویر.',
    sizes: ['M', 'L', 'XL', '2XL']
  },
  {
    id: 'stitch-02',
    name: 'تیشرت اسیدواش وینتیج استیچ',
    enName: 'Acid Wash Vintage Tee',
    category: 'tshirt',
    categoryName: 'تیشرت',
    price: 740000,
    oldPrice: 890000,
    rating: 4.8,
    badge: 'جدید',
    badgeType: 'cyan',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    description: 'تیشرت نخ پنبه ۱۰۰٪ خالص با افکت اسیدواش دستی و چاپ سیلک برجسته با ماندگاری مادام‌العمر.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'stitch-03',
    name: 'بامبر جکت تاکتیکال استیچ',
    enName: 'Tactical Bomber Jacket',
    category: 'jacket',
    categoryName: 'کاپشن و جکت',
    price: 2450000,
    oldPrice: 2850000,
    rating: 5.0,
    badge: 'ویژه',
    badgeType: 'pink',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    description: 'کاپشن ضدآب سبک با زیپ‌های آب‌بندی شده، جیب‌های چندمنظوره و دوخت‌های صنعتی دوبل.',
    sizes: ['L', 'XL']
  },
  {
    id: 'stitch-04',
    name: 'شلوار کارگو بنددار استیچ',
    enName: 'Stitch Strap Cargo Pants',
    category: 'pants',
    categoryName: 'شلوار و کارگو',
    price: 1190000,
    oldPrice: 1400000,
    rating: 4.7,
    badge: 'محبوب',
    badgeType: 'purple',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    description: 'شلوار کتان کش مشکی مات با ۶ جیب کاربردی و بندهای بافتنی تنظیم‌شونده الهام گرفته از استایل تک‌ویر.',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'stitch-05',
    name: 'دورس مینیمال پشمی استیچ',
    enName: 'Minimal Fleece Sweatshirt',
    category: 'hoodie',
    categoryName: 'هودی و دورس',
    price: 980000,
    oldPrice: 1200000,
    rating: 4.9,
    badge: 'پاییزه',
    badgeType: 'cyan',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80',
    description: 'دورس بدون کلاه با بافت متراکم کرکی، مچ‌کش محکم و نشان فلزی گان‌متال استیچ در پایین لباس.',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'stitch-06',
    name: 'کیف کراس‌بادی کاربردی استیچ',
    enName: 'Crossbody Utility Bag',
    category: 'accessories',
    categoryName: 'اکسسوری',
    price: 590000,
    oldPrice: 690000,
    rating: 4.8,
    badge: 'جدید',
    badgeType: 'purple',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'کیف دوشی مقاوم در برابر پارگی از جنس کوردورا، با یراق‌آلات فلزی و بند عریض قابل تنظیم.',
    sizes: ['تک‌سایز']
  },
  {
    id: 'stitch-07',
    name: 'کلاه کپ گلدوزی استیچ',
    enName: 'Stitch Signature Cap',
    category: 'accessories',
    categoryName: 'اکسسوری',
    price: 390000,
    oldPrice: 480000,
    rating: 4.9,
    badge: 'پرفروش',
    badgeType: 'pink',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    description: 'کلاه نقاب‌دار کتان با گلدوزی سه‌بعدی و بند سگک‌دار چرمی قابل تنظیم.',
    sizes: ['تک‌سایز']
  },
  {
    id: 'stitch-08',
    name: 'تیشرت اورسایز نئون استیچ',
    enName: 'Neon Graphic Oversized Tee',
    category: 'tshirt',
    categoryName: 'تیشرت',
    price: 790000,
    oldPrice: 950000,
    rating: 4.7,
    badge: 'تابستانه',
    badgeType: 'cyan',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    description: 'طراحی رترو-سایبر با طرح فسفری درخشان در بلک‌لایت و یقه کشبافت ضخیم ضد دفرمه شدن.',
    sizes: ['M', 'L', 'XL']
  }
];

// Helper: Format Persian Numbers
function toPersianDigits(num) {
  if (num === null || num === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, x => farsiDigits[x]);
}

function formatPrice(price) {
  const formatted = price.toLocaleString('en-US');
  return toPersianDigits(formatted);
}

// Shopping Cart State & Management
class CartManager {
  constructor() {
    this.storageKey = 'stitch_cart_items';
    this.cart = this.loadCart();
    this.listeners = [];
  }

  loadCart() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    this.notify();
  }

  notify() {
    this.listeners.forEach(fn => fn(this.cart));
  }

  subscribe(fn) {
    this.listeners.push(fn);
    fn(this.cart);
  }

  addItem(product, size = 'L', quantity = 1) {
    const existingIndex = this.cart.findIndex(
      item => item.id === product.id && item.size === size
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        quantity: quantity
      });
    }

    this.saveCart();
    showToast(`«${product.name}» به سبد خرید اضافه شد`);
  }

  updateQuantity(id, size, change) {
    const item = this.cart.find(i => i.id === id && i.size === size);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
      this.removeItem(id, size);
    } else {
      this.saveCart();
    }
  }

  removeItem(id, size) {
    this.cart = this.cart.filter(i => !(i.id === id && i.size === size));
    this.saveCart();
    showToast('آیتم از سبد خرید حذف شد');
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  generateTelegramOrderText(customerInfo = {}) {
    if (this.cart.length === 0) return '';

    let text = `🛍 سفارش جدید از وبسایت ${CONFIG.storeName}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `📦 اقلام سفارش:\n`;

    this.cart.forEach((item, index) => {
      text += `${toPersianDigits(index + 1)}. ${item.name}\n`;
      text += `   سایز: ${item.size} | تعداد: ${toPersianDigits(item.quantity)} عدد | قیمت: ${formatPrice(item.price * item.quantity)} ${CONFIG.currency}\n`;
    });

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `💰 مبلغ قابل پرداخت: ${formatPrice(this.getTotalPrice())} ${CONFIG.currency}\n\n`;

    if (customerInfo.name || customerInfo.phone || customerInfo.address) {
      text += `👤 مشخصات تحویل‌گیرنده:\n`;
      if (customerInfo.name) text += `• نام: ${customerInfo.name}\n`;
      if (customerInfo.phone) text += `• تماس: ${customerInfo.phone}\n`;
      if (customerInfo.address) text += `• آدرس: ${customerInfo.address}\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    }

    text += `لطفاً فاکتور نهایی و شماره کارت جهت واریز را ارسال فرمایید. سپاس!`;
    return text;
  }
}

const Cart = new CartManager();

// Toast Notifications
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="font-size: 1.2rem;">✨</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Telegram Direct Ordering Action
function orderSingleViaTelegram(productId, size = 'L') {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  let msg = `سلام و احترام، مایل به سفارش این محصول از فروشگاه استیچ هستم:\n\n`;
  msg += `🏷 نام محصول: ${product.name}\n`;
  msg += `📏 سایز انتخابی: ${size}\n`;
  msg += `💵 قیمت: ${formatPrice(product.price)} ${CONFIG.currency}\n`;
  msg += `🔗 کد محصول: ${product.id}\n\n`;
  msg += `لطفاً وضعیت موجودی و نحوه ارسال را بفرمایید.`;

  const telegramUrl = `https://t.me/${CONFIG.telegramUsername}?text=${encodeURIComponent(msg)}`;
  window.open(telegramUrl, '_blank');
}

function sendCartToTelegram() {
  if (Cart.cart.length === 0) {
    showToast('سبد خرید شما خالی است!');
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const addressInput = document.getElementById('customer-address');

  const customerInfo = {
    name: nameInput ? nameInput.value.trim() : '',
    phone: phoneInput ? phoneInput.value.trim() : '',
    address: addressInput ? addressInput.value.trim() : ''
  };

  const message = Cart.generateTelegramOrderText(customerInfo);
  const telegramUrl = `https://t.me/${CONFIG.telegramUsername}?text=${encodeURIComponent(message)}`;

  // Copy to clipboard as well for convenience
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message).then(() => {
      showToast('متن سفارش در حافظه کپی شد و تلگرام باز می‌شود...');
    }).catch(() => {});
  }

  window.open(telegramUrl, '_blank');
}

// UI Render Helpers
function createProductCardHTML(product) {
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;

  return `
    <article class="product-card glass-card" id="card-${product.id}">
      <div class="product-image-box">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        
        <div class="product-badges">
          ${product.badge ? `<span class="badge badge-${product.badgeType}">${product.badge}</span>` : ''}
        </div>

        <div class="product-quick-actions">
          <button class="btn btn-glass" onclick="openQuickView('${product.id}')" title="مشاهده جزئیات">
            <span>👁️</span> مشاهده سریع
          </button>
        </div>
      </div>

      <div class="product-info">
        <span class="product-category">${product.categoryName}</span>
        <h3 class="product-name">${product.name}</h3>
        
        <div class="product-rating">
          <span>★</span>
          <span>${toPersianDigits(product.rating)}</span>
          <span style="color: var(--text-dim); font-size: 0.75rem;">(رضایت مشتریان)</span>
        </div>

        <div class="product-price-row">
          <div class="product-price">
            ${formatPrice(product.price)}
            <span class="currency">${CONFIG.currency}</span>
          </div>
          ${hasDiscount ? `<div class="product-old-price">${formatPrice(product.oldPrice)}</div>` : ''}
        </div>

        <div class="product-actions-row">
          <button class="btn btn-primary" onclick="Cart.addItem(PRODUCTS_DATA.find(p=>p.id==='${product.id}'))">
            <span>+</span> افزودن به سبد
          </button>
          <button class="btn btn-telegram btn-icon" onclick="orderSingleViaTelegram('${product.id}')" title="سفارش فوری در تلگرام">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.61 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 4-.1.74 6.68-2.9 9.32-4.04 4.44-1.92 5.37-2.25 5.97-2.26.13 0 .43.03.62.19.16.13.21.31.23.44-.01.07.01.22-.01.37z"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  let selectedSize = product.sizes[0] || 'L';

  modal.innerHTML = `
    <div class="modal-card">
      <button class="modal-close-btn" onclick="closeQuickView()">&times;</button>
      
      <div class="quick-view-grid">
        <div>
          <img src="${product.image}" alt="${product.name}" class="quick-view-img" />
        </div>
        
        <div class="quick-view-details">
          <span class="badge badge-${product.badgeType}">${product.categoryName}</span>
          <h2 style="font-size: 1.5rem; font-weight: 800;">${product.name}</h2>
          <p style="color: var(--text-dim); font-size: 0.85rem;">${product.enName}</p>
          
          <div class="product-price-row" style="margin: 0; padding: 0; border: none;">
            <div class="product-price" style="font-size: 1.4rem;">
              ${formatPrice(product.price)}
              <span class="currency">${CONFIG.currency}</span>
            </div>
            ${product.oldPrice ? `<div class="product-old-price" style="font-size: 1.1rem;">${formatPrice(product.oldPrice)}</div>` : ''}
          </div>

          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8;">
            ${product.description}
          </p>

          <div>
            <label class="form-label">انتخاب سایز:</label>
            <div style="display: flex; gap: 8px;" id="size-selector-group">
              ${product.sizes.map((s, i) => `
                <button type="button" class="btn btn-glass size-btn ${i === 0 ? 'active' : ''}" 
                        style="padding: 6px 16px; font-size: 0.9rem; min-width: 44px; ${i === 0 ? 'border-color: var(--accent-purple); background: rgba(139,92,246,0.2);' : ''}" 
                        onclick="selectSizeInModal('${s}', this)">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <div style="display: flex; gap: 12px; margin-top: 10px; flex-wrap: wrap;">
            <button class="btn btn-primary" style="flex: 1;" onclick="Cart.addItem(PRODUCTS_DATA.find(p=>p.id==='${product.id}'), window.currentModalSize || '${selectedSize}'); closeQuickView();">
              افزودن به سبد خرید
            </button>
            <button class="btn btn-telegram" onclick="orderSingleViaTelegram('${product.id}', window.currentModalSize || '${selectedSize}')">
              سفارش در تلگرام
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  window.currentModalSize = selectedSize;
  modal.classList.add('open');

  modal.onclick = (e) => {
    if (e.target === modal) closeQuickView();
  };
}

function selectSizeInModal(size, btnElement) {
  window.currentModalSize = size;
  const group = document.getElementById('size-selector-group');
  if (group) {
    group.querySelectorAll('.size-btn').forEach(btn => {
      btn.style.borderColor = 'rgba(255,255,255,0.15)';
      btn.style.background = 'rgba(255,255,255,0.08)';
    });
    btnElement.style.borderColor = 'var(--accent-purple)';
    btnElement.style.background = 'rgba(139,92,246,0.2)';
  }
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('open');
}

// Shopping Cart Drawer UI
function initCartDrawer() {
  let drawerOverlay = document.getElementById('cart-drawer-overlay');
  if (!drawerOverlay) {
    drawerOverlay = document.createElement('div');
    drawerOverlay.id = 'cart-drawer-overlay';
    drawerOverlay.className = 'cart-drawer-overlay';
    
    drawerOverlay.innerHTML = `
      <div class="cart-drawer">
        <div class="cart-drawer-header">
          <h3>
            <span>🛍️</span> سبد خرید شما
          </h3>
          <button class="modal-close-btn" style="position: static;" onclick="toggleCart(false)">&times;</button>
        </div>

        <div class="cart-items-container" id="cart-items-list">
          <!-- Populated dynamically -->
        </div>

        <div class="cart-drawer-footer" id="cart-footer-panel">
          <div class="cart-summary-row">
            <span>مجموع سفارش:</span>
            <span id="cart-total-price">۰ تومان</span>
          </div>

          <!-- Customer details for one-click Telegram order -->
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
            <input type="text" id="customer-name" class="form-input" placeholder="نام و نام خانوادگی (اختیاری)" style="font-size: 0.85rem; padding: 8px 12px;" />
            <input type="tel" id="customer-phone" class="form-input" placeholder="شماره موبایل جهت هماهنگی (اختیاری)" style="font-size: 0.85rem; padding: 8px 12px;" />
            <textarea id="customer-address" class="form-input" placeholder="آدرس یا توضیحات تحویل (اختیاری)" style="font-size: 0.85rem; padding: 8px 12px; min-height: 50px; resize: none;"></textarea>
          </div>

          <button class="btn btn-telegram" style="width: 100%; font-size: 1rem;" onclick="sendCartToTelegram()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.61 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 4-.1.74 6.68-2.9 9.32-4.04 4.44-1.92 5.37-2.25 5.97-2.26.13 0 .43.03.62.19.16.13.21.31.23.44-.01.07.01.22-.01.37z"/></svg>
            ارسال و ثبت نهایی در تلگرام
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(drawerOverlay);

    drawerOverlay.onclick = (e) => {
      if (e.target === drawerOverlay) toggleCart(false);
    };
  }

  // Subscribe to Cart updates
  Cart.subscribe(updateCartUI);
}

function toggleCart(isOpen) {
  const drawer = document.getElementById('cart-drawer-overlay');
  if (!drawer) return;

  if (isOpen !== undefined) {
    drawer.classList.toggle('open', isOpen);
  } else {
    drawer.classList.toggle('open');
  }
}

function updateCartUI(items) {
  // Update header badges
  const badges = document.querySelectorAll('.cart-count-badge');
  const count = Cart.getTotalCount();
  badges.forEach(b => {
    b.textContent = toPersianDigits(count);
    b.style.display = count > 0 ? 'flex' : 'none';
  });

  // Update Drawer list
  const list = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer-panel');
  const totalEl = document.getElementById('cart-total-price');

  if (!list) return;

  if (items.length === 0) {
    list.innerHTML = `
      <div class="cart-empty-message">
        <div style="font-size: 3rem; margin-bottom: 12px; opacity: 0.6;">🛒</div>
        <h4>سبد خرید شما در حال حاضر خالی است</h4>
        <p style="font-size: 0.88rem; margin-top: 6px; color: var(--text-dim);">می‌توانید محصولات را از صفحه فروشگاه انتخاب کنید.</p>
        <a href="products.html" class="btn btn-glass" style="margin-top: 20px; display: inline-flex;" onclick="toggleCart(false)">
          مشاهده محصولات
        </a>
      </div>
    `;
    if (footer) footer.style.display = 'none';
  } else {
    if (footer) footer.style.display = 'flex';
    if (totalEl) totalEl.textContent = `${formatPrice(Cart.getTotalPrice())} ${CONFIG.currency}`;

    list.innerHTML = items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-meta">سایز: ${item.size}</span>
          <span class="cart-item-price">${formatPrice(item.price)} ${CONFIG.currency}</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="Cart.updateQuantity('${item.id}', '${item.size}', 1)">+</button>
            <span class="cart-qty-val">${toPersianDigits(item.quantity)}</span>
            <button class="qty-btn" onclick="Cart.updateQuantity('${item.id}', '${item.size}', -1)">-</button>
          </div>
          <button style="background: none; border: none; color: #ef4444; font-size: 0.75rem; cursor: pointer;" onclick="Cart.removeItem('${item.id}', '${item.size}')">
            حذف
          </button>
        </div>
      </div>
    `).join('');
  }
}

// Mobile Menu Handler
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-open-btn');
  const closeBtn = document.getElementById('mobile-menu-close-btn');
  const overlay = document.getElementById('mobile-nav-overlay');

  if (openBtn && overlay) {
    openBtn.addEventListener('click', () => overlay.classList.add('open'));
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }
}

// FAQ Accordion Handler
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// Global Document Initialization
document.addEventListener('DOMContentLoaded', () => {
  initCartDrawer();
  initMobileMenu();
  initFAQAccordion();

  // Highlight active link in header based on current URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Cart Button Click Handler
  document.querySelectorAll('.cart-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleCart(true);
    });
  });
});
