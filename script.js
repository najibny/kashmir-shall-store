/* ===================================================
   كشمير شال - Kashmir Shall
   الملف الرئيسي للجافاسكريبت
=================================================== */

// ===== إعدادات أسعار الصرف - عدّلها من هنا =====
const exchangeRates = {
  USD_TO_TRY: 32.5,   // سعر الدولار مقابل الليرة التركية
  USD_TO_SYP: 14000   // سعر الدولار مقابل الليرة السورية
};

// ===== رقم واتساب - عدّله من هنا =====
const WHATSAPP_NUMBER = "963940573461"; // رقم سوريا بصيغة واتساب الدولية

// ===== كلمة مرور لوحة الإدارة - عدّلها من هنا =====
const ADMIN_PASSWORD = "kashmir2025";

// ===== روابط التواصل الاجتماعي - عدّلها من هنا =====
const socialLinks = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  instagram: "https://www.instagram.com/kashmir_shall?igsi=MWdwN29kcnh2dnhnNg%3D%3D&utm_source=qr", // ضع رابط الانستغرام هنا
  tiktok: "#",    // ضع رابط التيك توك هنا
  facebook: "https://www.facebook.com/share/1YKAdPSVW9/?mibextid=wwXIfr"   // ضع رابط الفيسبوك هنا
};

// ===== التصنيفات الفرعية =====
const subcategories = {
  shoes: ["كعب", "سبورت", "صندل", "بوت", "أخرى"],
  bags:  ["حقائب يد", "حقائب كتف", "جزادين", "أخرى"],
  hijabs:["كشمير", "شيفون", "قطن", "أخرى"]
};

const catLabels = { shoes: "الأحذية", bags: "الحقائب", hijabs: "الحجابات" };

// ===== صور Placeholder للمنتجات التجريبية =====
// يمكن استبدالها لاحقاً من لوحة التحكم
const placeholders = {
  shoes: [
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
    "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=400&q=80",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80"
  ],
  bags: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
  ],
  hijabs: [
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=400&q=80",
    "https://images.unsplash.com/photo-1559163499-413811fb2344?w=400&q=80",
    "https://images.unsplash.com/photo-1529736576495-1ed4a29ca9d4?w=400&q=80"
  ]
};

// ===== صورة بديلة تعمل حتى عند فتح الموقع محليًا بدون إنترنت =====
const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20600%20750%22%3E%0A%3Crect%20width%3D%22600%22%20height%3D%22750%22%20fill%3D%22%23f3eee7%22/%3E%0A%3Ccircle%20cx%3D%22300%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22%23faf7f2%22%20stroke%3D%22%23ead9ba%22%20stroke-width%3D%224%22/%3E%0A%3Cpath%20d%3D%22M180%20470%20Q300%20390%20420%20470%22%20fill%3D%22none%22%20stroke%3D%22%23c9a96e%22%20stroke-width%3D%2210%22%20stroke-linecap%3D%22round%22/%3E%0A%3Ctext%20x%3D%22300%22%20y%3D%22325%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2234%22%20fill%3D%22%23a9854f%22%3EKASHMIR%20SHALL%3C/text%3E%0A%3Ctext%20x%3D%22300%22%20y%3D%22365%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2225%22%20fill%3D%22%23776b60%22%3E%D9%83%D8%B4%D9%85%D9%8A%D8%B1%20%D8%B4%D8%A7%D9%84%3C/text%3E%0A%3C/svg%3E";

// ===== بيانات المنتجات التجريبية =====
const defaultProducts = [
  {
    id: "p1",
    name: "حذاء كعب كلاسيك سواريه",
    category: "shoes",
    subcategory: "كعب",
    description: "حذاء أنيق برباط جانبي، مناسب للمناسبات والسهرات. صنع من الجلد الطبيعي الناعم.",
    priceTRY: 850,
    discount: 20,
    sizes: ["36","37","38","39","40","41"],
    colors: [
      { name: "أسود", hex: "#2C2C2C" },
      { name: "بيج", hex: "#D4B896" },
      { name: "ذهبي", hex: "#C9A96E" }
    ],
    images: [placeholders.shoes[0], placeholders.shoes[1]]
  },
  {
    id: "p2",
    name: "حذاء سبورت ووك كومفورت",
    category: "shoes",
    subcategory: "سبورت",
    description: "حذاء رياضي خفيف الوزن، مريح للمشي اليومي والتسوق.",
    priceTRY: 650,
    discount: 0,
    sizes: ["36","37","38","39","40"],
    colors: [
      { name: "أبيض", hex: "#F5F5F0" },
      { name: "وردي", hex: "#E8B4B8" },
      { name: "رمادي", hex: "#9B9B9B" }
    ],
    images: [placeholders.shoes[2], placeholders.shoes[0]]
  },
  {
    id: "p3",
    name: "صندل صيفي مفتوح",
    category: "shoes",
    subcategory: "صندل",
    description: "صندل أنيق ومريح للصيف، بتصميم بسيط ومتميز.",
    priceTRY: 420,
    discount: 0,
    sizes: ["35","36","37","38","39","40"],
    colors: [
      { name: "ذهبي", hex: "#C9A96E" },
      { name: "فضي", hex: "#C0C0C0" }
    ],
    images: [placeholders.shoes[1]]
  },
  {
    id: "p4",
    name: "حقيبة يد لوكس لامبدا",
    category: "bags",
    subcategory: "حقائب يد",
    description: "حقيبة يد فاخرة من الجلد الناعم مع إبزيم ذهبي أنيق، تتسع للأساسيات اليومية.",
    priceTRY: 1200,
    discount: 15,
    sizes: [],
    colors: [
      { name: "بيج", hex: "#D4B896" },
      { name: "أسود", hex: "#2C2C2C" },
      { name: "بني", hex: "#8B5E3C" }
    ],
    images: [placeholders.bags[0], placeholders.bags[1]]
  },
  {
    id: "p5",
    name: "حقيبة كتف عملية سافاري",
    category: "bags",
    subcategory: "حقائب كتف",
    description: "حقيبة كتف واسعة وعملية، مثالية للاستخدام اليومي والتسوق.",
    priceTRY: 780,
    discount: 0,
    sizes: [],
    colors: [
      { name: "كاكي", hex: "#B5A58E" },
      { name: "أسود", hex: "#2C2C2C" }
    ],
    images: [placeholders.bags[2]]
  },
  {
    id: "p6",
    name: "جزدان جلد مع زيبة",
    category: "bags",
    subcategory: "جزادين",
    description: "جزدان صغير أنيق من الجلد الصناعي الفاخر، مع مقصورات منظمة داخلية.",
    priceTRY: 320,
    discount: 0,
    sizes: [],
    colors: [
      { name: "وردي غامق", hex: "#C17B7B" },
      { name: "بيج", hex: "#D4B896" },
      { name: "بني", hex: "#8B5E3C" }
    ],
    images: [placeholders.bags[1]]
  },
  {
    id: "p7",
    name: "حجاب كشمير بريميوم",
    category: "hijabs",
    subcategory: "كشمير",
    description: "حجاب كشمير فاخر ناعم الملمس، دافئ ومريح، بألوان هادئة تناسب كل موقف.",
    priceTRY: 290,
    discount: 0,
    sizes: [],
    colors: [
      { name: "كريمي", hex: "#F5EDD7" },
      { name: "رمادي فاتح", hex: "#D3CFC9" },
      { name: "سكري", hex: "#E8B4B8" },
      { name: "تراب", hex: "#B8935A" }
    ],
    images: [placeholders.hijabs[0], placeholders.hijabs[1]]
  },
  {
    id: "p8",
    name: "حجاب شيفون سيلكي",
    category: "hijabs",
    subcategory: "شيفون",
    description: "حجاب شيفون خفيف شفاف أنيق، مثالي للمناسبات والسهرات.",
    priceTRY: 180,
    discount: 10,
    sizes: [],
    colors: [
      { name: "أبيض", hex: "#FAFAF5" },
      { name: "ذهبي", hex: "#C9A96E" },
      { name: "أخضر مينت", hex: "#B5D5C5" }
    ],
    images: [placeholders.hijabs[2]]
  },
  {
    id: "p9",
    name: "حجاب قطن يومي",
    category: "hijabs",
    subcategory: "قطن",
    description: "حجاب قطني خفيف ومريح للاستخدام اليومي، تهوية ممتازة ومتنفس.",
    priceTRY: 120,
    discount: 0,
    sizes: [],
    colors: [
      { name: "أسود", hex: "#2C2C2C" },
      { name: "أبيض", hex: "#FAFAF5" },
      { name: "نيلي", hex: "#7B9EC8" },
      { name: "زيتي", hex: "#8B9B7A" }
    ],
    images: [placeholders.hijabs[0]]
  }
];

/* ===================================================
   متغيرات الحالة
=================================================== */
let products = [];
let cart = [];
let currentFilter = "all";
let currentSubcat = "all";
let currentProduct = null;
let selectedSize = null;
let selectedColor = null;
let galleryIndex = 0;

// متغيرات لإدارة لوحة التحكم
let editingProductId = null;
let adminImages = [];
let adminColors = [];
let adminSizes = [];

/* ===================================================
   تحميل وحفظ البيانات من LocalStorage
=================================================== */

// تحميل المنتجات المحفوظة من LocalStorage
function loadProducts() {
  // محاولة تحميل المنتجات المحفوظة، مع حماية من أي بيانات تالفة
  try {
    const saved = localStorage.getItem("ks_products");
    if (saved) {
      products = JSON.parse(saved);
      if (!Array.isArray(products)) throw new Error("Invalid products");
    } else {
      products = defaultProducts;
      saveProducts();
    }
  } catch (error) {
    console.warn("تعذر تحميل المنتجات المحفوظة:", error);
    products = defaultProducts;
  }
}

// حفظ المنتجات في LocalStorage
function saveProducts() {
  // حفظ المنتجات داخل الجهاز ليبقى المحتوى موجودًا بعد تحديث الصفحة
  try {
    localStorage.setItem("ks_products", JSON.stringify(products));
    return true;
  } catch (error) {
    console.error("تعذر حفظ المنتجات:", error);
    showToast("⚠️ مساحة التخزين ممتلئة، خفّف حجم الصور");
    return false;
  }
}

// تحميل السلة من LocalStorage
function loadCart() {
  // تحميل السلة من الجهاز
  try {
    const saved = localStorage.getItem("ks_cart");
    if (saved) cart = JSON.parse(saved);
    if (!Array.isArray(cart)) cart = [];
  } catch (error) {
    cart = [];
  }
  updateCartCount();
}

// حفظ السلة في LocalStorage
function saveCart() {
  // حفظ السلة محليًا
  try { localStorage.setItem("ks_cart", JSON.stringify(cart)); }
  catch (error) { console.warn("تعذر حفظ السلة:", error); }
}

/* ===================================================
   حساب الأسعار
=================================================== */

// حساب السعر بعد الخصم بالليرة التركية
function getDiscountedPriceTRY(product) {
  if (product.discount && product.discount > 0) {
    return product.priceTRY * (1 - product.discount / 100);
  }
  return product.priceTRY;
}

// تحويل الليرة التركية إلى الدولار
function tryToUSD(try_amount) {
  return (try_amount / exchangeRates.USD_TO_TRY).toFixed(2);
}

// تحويل الليرة التركية إلى الليرة السورية
function tryToSYP(try_amount) {
  return Math.round((try_amount / exchangeRates.USD_TO_TRY) * exchangeRates.USD_TO_SYP).toLocaleString('ar');
}

// تنسيق السعر للعرض
function formatPrices(product) {
  const priceFinal = getDiscountedPriceTRY(product);
  return {
    try: `${priceFinal.toFixed(0)} ₺`,
    usd: `$${tryToUSD(priceFinal)}`,
    syp: `${tryToSYP(priceFinal)} ل.س`,
    tryOld: product.discount ? `${product.priceTRY} ₺` : null,
    usdOld: product.discount ? `$${tryToUSD(product.priceTRY)}` : null
  };
}

/* ===================================================
   عرض المنتجات في الصفحة الرئيسية
=================================================== */

// فلترة المنتجات حسب القسم والتصنيف الفرعي
function getFilteredProducts() {
  return products.filter(p => {
    if (currentFilter !== "all" && p.category !== currentFilter) return false;
    if (currentSubcat !== "all" && p.subcategory !== currentSubcat) return false;
    return true;
  });
}

// عرض الأقسام الفرعية
function renderSubcats() {
  const wrap = document.getElementById("subCats");
  wrap.innerHTML = "";
  if (currentFilter === "all") return;
  const subs = subcategories[currentFilter] || [];
  const allBtn = document.createElement("button");
  allBtn.className = "subcat-btn" + (currentSubcat === "all" ? " active" : "");
  allBtn.textContent = "الكل";
  allBtn.onclick = () => { currentSubcat = "all"; renderSubcats(); renderProducts(); };
  wrap.appendChild(allBtn);
  subs.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "subcat-btn" + (currentSubcat === sub ? " active" : "");
    btn.textContent = sub;
    btn.onclick = () => { currentSubcat = sub; renderSubcats(); renderProducts(); };
    wrap.appendChild(btn);
  });
}

// عرض المنتجات في الصفحة
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  const filtered = getFilteredProducts();
  grid.innerHTML = "";
  if (filtered.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  filtered.forEach((product, i) => {
    const card = createProductCard(product, i);
    grid.appendChild(card);
  });
}

// إنشاء بطاقة منتج
function createProductCard(product, index) {
  const prices = formatPrices(product);
  const card = document.createElement("div");
  card.className = "product-card";
  card.style.animationDelay = `${index * 0.05}s`;
  const img = product.images && product.images[0] ? product.images[0] : FALLBACK_IMAGE;
  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${img}" alt="${product.name}" loading="lazy" onerror="this.src=FALLBACK_IMAGE"/>
      ${product.discount ? `<span class="card-badge">خصم ${product.discount}%</span>` : ""}
    </div>
    <div class="card-body">
      <div class="card-name">${product.name}</div>
      <div class="card-prices">
        <div class="price-try">${prices.try} ${prices.tryOld ? `<span class="price-old">${prices.tryOld}</span>` : ""}</div>
        <div class="price-usd">${prices.usd}</div>
        <div class="price-syp">${prices.syp}</div>
      </div>
    </div>
  `;
  card.onclick = () => openProductModal(product);
  return card;
}

/* ===================================================
   تصفية المنتجات حسب القسم
=================================================== */

// تطبيق فلتر القسم
function applyFilter(cat) {
  currentFilter = cat;
  currentSubcat = "all";
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(`.filter-btn[data-cat="${cat}"]`)?.classList.add("active");
  renderSubcats();
  renderProducts();
  document.getElementById("productsSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ===================================================
   فتح وإغلاق Modal المنتج
=================================================== */

// فتح تفاصيل المنتج
function openProductModal(product) {
  currentProduct = product;
  selectedSize = null;
  selectedColor = null;
  galleryIndex = 0;
  const modal = document.getElementById("productModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = buildProductModalHTML(product);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  initGallery(product);
  initSizeButtons(product);
  initColorButtons(product);
  setupSwipe(document.querySelector(".modal-gallery"));
}

// بناء HTML تفاصيل المنتج
function buildProductModalHTML(product) {
  const prices = formatPrices(product);
  const imgs = product.images && product.images.length > 0
    ? product.images
    : [FALLBACK_IMAGE];

  const thumbs = imgs.length > 1
    ? `<div class="gallery-thumbs">${imgs.map((src, i) => `<img class="gallery-thumb ${i === 0 ? "active" : ""}" src="${src}" data-index="${i}" alt="صورة ${i+1}" onerror="this.src=FALLBACK_IMAGE"/>`).join("")}</div>`
    : "";

  const sizesHTML = product.sizes && product.sizes.length > 0
    ? `<div class="modal-label">المقاس</div><div class="sizes-wrap" id="sizesWrap">${product.sizes.map(s => `<button class="size-btn" data-size="${s}">${s}</button>`).join("")}</div>`
    : "";

  const colorsHTML = product.colors && product.colors.length > 0
    ? `<div class="modal-label">اللون</div><div class="colors-wrap" id="colorsWrap">${product.colors.map((c, i) => `<div class="color-item"><button class="color-btn" data-index="${i}" data-name="${c.name}" style="background:${c.hex}" title="${c.name}"></button><span class="color-label">${c.name}</span></div>`).join("")}</div>`
    : "";

  return `
    <div class="modal-gallery" id="modalGallery">
      <img class="gallery-main" id="galleryMain" src="${imgs[0]}" alt="${product.name}" onerror="this.src=FALLBACK_IMAGE"/>
      ${imgs.length > 1 ? `<div class="gallery-nav"><button onclick="changeGallery(-1)">›</button><button onclick="changeGallery(1)">‹</button></div>` : ""}
    </div>
    ${thumbs}
    <div class="modal-info">
      <div class="modal-name">${product.name}</div>
      <div class="modal-desc">${product.description}</div>
      <div class="modal-prices">
        <span class="modal-price-try">${prices.try} ${prices.tryOld ? `<span class="modal-price-old">${prices.tryOld}</span>` : ""}</span>
        <span class="modal-price-usd">${prices.usd}</span>
        <span class="modal-price-syp">${prices.syp}</span>
      </div>
    </div>
    ${sizesHTML}
    ${colorsHTML}
    <div class="modal-actions">
      <button class="btn-order" onclick="orderNow()">اطلبيه الآن 📲</button>
      <button class="btn-cart" onclick="addToCart()">+ السلة</button>
    </div>
  `;
}

// تهيئة معرض الصور
function initGallery(product) {
  document.querySelectorAll(".gallery-thumb").forEach(t => {
    t.onclick = () => {
      galleryIndex = parseInt(t.dataset.index);
      updateGallery(product);
    };
  });
}

// تغيير صورة المعرض
function changeGallery(dir) {
  if (!currentProduct) return;
  const imgs = currentProduct.images || [];
  galleryIndex = (galleryIndex + dir + imgs.length) % imgs.length;
  updateGallery(currentProduct);
}

function updateGallery(product) {
  const imgs = product.images || [];
  const main = document.getElementById("galleryMain");
  if (main && imgs[galleryIndex]) {
    main.style.opacity = "0";
    setTimeout(() => {
      main.src = imgs[galleryIndex];
      main.style.opacity = "1";
    }, 150);
  }
  document.querySelectorAll(".gallery-thumb").forEach(t => {
    t.classList.toggle("active", parseInt(t.dataset.index) === galleryIndex);
  });
}

// تهيئة سحب الصور
function setupSwipe(el) {
  if (!el) return;
  let startX = 0;
  el.addEventListener("touchstart", e => { startX = e.touches[0].clientX; });
  el.addEventListener("touchend", e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) changeGallery(diff > 0 ? 1 : -1);
  });
}

// تهيئة أزرار المقاسات
function initSizeButtons(product) {
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.onclick = () => {
      selectedSize = btn.dataset.size;
      document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };
  });
}

// تهيئة أزرار الألوان
function initColorButtons(product) {
  document.querySelectorAll(".color-btn").forEach(btn => {
    btn.onclick = () => {
      selectedColor = { name: btn.dataset.name, hex: btn.style.background };
      document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };
  });
}

// إغلاق Modal المنتج
function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "";
  currentProduct = null;
}

/* ===================================================
   الطلب عبر واتساب
=================================================== */

// التحقق من اختيار المقاس واللون قبل الطلب
function validateSelection(product) {
  if (product.sizes && product.sizes.length > 0 && !selectedSize) {
    showToast("⚠️ يرجى اختيار المقاس أولاً");
    return false;
  }
  if (product.colors && product.colors.length > 0 && !selectedColor) {
    showToast("⚠️ يرجى اختيار اللون أولاً");
    return false;
  }
  return true;
}

// إنشاء رسالة واتساب للمنتج الواحد
function orderNow() {
  if (!currentProduct) return;
  if (!validateSelection(currentProduct)) return;
  const prices = formatPrices(currentProduct);
  let msg = `مرحباً، أريد طلب:\n\n`;
  msg += `🛍️ اسم المنتج: ${currentProduct.name}\n`;
  if (selectedColor) msg += `🎨 اللون: ${selectedColor.name}\n`;
  if (selectedSize) msg += `📐 المقاس: ${selectedSize}\n`;
  msg += `\n💰 السعر:\n`;
  msg += `• ${prices.try}\n`;
  msg += `• ${prices.usd}\n`;
  msg += `• ${prices.syp}\n`;
  openWhatsApp(msg);
}

// فتح رابط واتساب
function openWhatsApp(msg) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ===================================================
   السلة
=================================================== */

// إضافة منتج إلى السلة
function addToCart() {
  if (!currentProduct) return;
  if (!validateSelection(currentProduct)) return;
  const itemId = `${currentProduct.id}_${selectedColor?.name || "none"}_${selectedSize || "none"}`;
  const existing = cart.find(i => i.itemId === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      itemId,
      product: currentProduct,
      color: selectedColor,
      size: selectedSize,
      qty: 1
    });
  }
  saveCart();
  updateCartCount();
  showToast("✓ تمت الإضافة إلى السلة");
  closeProductModal();
}

// تحديث عداد السلة في الهيدر
function updateCartCount() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  const el = document.getElementById("cartCount");
  el.textContent = total;
  el.classList.toggle("visible", total > 0);
}

// فتح السلة
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  renderCart();
}

// إغلاق السلة
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// عرض محتوى السلة
function renderCart() {
  const itemsEl = document.getElementById("cartItems");
  const footerEl = document.getElementById("cartFooter");
  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><p>🛍️ السلة فارغة</p></div>`;
    footerEl.innerHTML = "";
    return;
  }
  itemsEl.innerHTML = cart.map((item, idx) => {
    const prices = formatPrices(item.product);
    const img = item.product.images?.[0] || FALLBACK_IMAGE;
    const colorDot = item.color ? `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color.hex};margin-left:4px;border:1px solid #ddd"></span>` : "";
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${img}" alt="${item.product.name}" onerror="this.src=FALLBACK_IMAGE"/>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.product.name}</div>
          <div class="cart-item-meta">
            ${item.color ? `${colorDot} ${item.color.name}` : ""}
            ${item.size ? ` · مقاس ${item.size}` : ""}
          </div>
          <div class="cart-item-price">${prices.try}</div>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(${idx}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
          </div>
        </div>
        <button class="cart-del" onclick="removeFromCart(${idx})">🗑</button>
      </div>
    `;
  }).join("");

  // حساب الإجماليات
  const totals = calcCartTotals();
  footerEl.innerHTML = `
    <div class="cart-totals">
      <div class="cart-total-row"><span>الإجمالي بالليرة التركية</span><span>${totals.try} ₺</span></div>
      <div class="cart-total-row"><span>الإجمالي بالدولار</span><span>$${totals.usd}</span></div>
      <div class="cart-total-row main"><span>الإجمالي بالليرة السورية</span><span>${totals.syp} ل.س</span></div>
    </div>
    <button class="btn-whatsapp" onclick="sendCartWhatsApp()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      إرسال الطلب عبر واتساب
    </button>
  `;
}

// حساب إجماليات السلة
function calcCartTotals() {
  let totalTRY = 0;
  cart.forEach(item => {
    totalTRY += getDiscountedPriceTRY(item.product) * item.qty;
  });
  return {
    try: totalTRY.toFixed(0),
    usd: tryToUSD(totalTRY),
    syp: tryToSYP(totalTRY)
  };
}

// تغيير كمية منتج في السلة
function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart();
  updateCartCount();
  renderCart();
}

// حذف منتج من السلة
function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  updateCartCount();
  renderCart();
}

// إرسال طلب السلة كاملاً عبر واتساب
function sendCartWhatsApp() {
  if (cart.length === 0) return;
  const totals = calcCartTotals();
  let msg = `مرحباً، أريد طلب المنتجات التالية:\n\n`;
  cart.forEach((item, i) => {
    const prices = formatPrices(item.product);
    msg += `${i + 1}. ${item.product.name}\n`;
    if (item.color) msg += `   🎨 اللون: ${item.color.name}\n`;
    if (item.size) msg += `   📐 المقاس: ${item.size}\n`;
    msg += `   الكمية: ${item.qty}\n`;
    msg += `   السعر: ${prices.try}\n\n`;
  });
  msg += `───────────────\n`;
  msg += `💰 الإجمالي:\n`;
  msg += `• ${totals.try} ₺\n`;
  msg += `• $${totals.usd}\n`;
  msg += `• ${totals.syp} ل.س`;
  openWhatsApp(msg);
}

/* ===================================================
   لوحة الإدارة
=================================================== */

// فتح لوحة الإدارة
function openAdmin() {
  document.getElementById("adminModal").classList.add("active");
  document.body.style.overflow = "hidden";
  document.getElementById("adminContent").innerHTML = buildLoginHTML();
}

// إغلاق لوحة الإدارة
function closeAdminModal() {
  document.getElementById("adminModal").classList.remove("active");
  document.body.style.overflow = "";
}

// HTML صفحة تسجيل الدخول
function buildLoginHTML() {
  return `
    <div class="admin-login">
      <h2>🔐 لوحة التحكم</h2>
      <p>أدخلي كلمة المرور للوصول</p>
      <div id="loginAlert"></div>
      <div class="field-group">
        <label>كلمة المرور</label>
        <input type="password" id="adminPass" placeholder="••••••••" />
      </div>
      <button class="btn-gold" onclick="doLogin()">دخول</button>
    </div>
  `;
}

// تسجيل الدخول
function doLogin() {
  const pass = document.getElementById("adminPass")?.value;
  if (pass === ADMIN_PASSWORD) {
    renderAdminPanel();
  } else {
    document.getElementById("loginAlert").innerHTML = `<div class="alert alert-error">كلمة المرور غير صحيحة</div>`;
  }
}

// عرض لوحة التحكم
function renderAdminPanel() {
  editingProductId = null;
  adminImages = [];
  adminColors = [];
  adminSizes = [];
  document.getElementById("adminContent").innerHTML = `
    <div class="admin-panel">
      <div class="admin-tabs">
        <button class="admin-tab active" onclick="showAdminTab('add', this)">إضافة منتج</button>
        <button class="admin-tab" onclick="showAdminTab('list', this)">المنتجات (${products.length})</button>
      </div>
      <div id="adminTabAdd" class="admin-section active">${buildAddForm()}</div>
      <div id="adminTabList" class="admin-section">${buildProductList()}</div>
    </div>
  `;
}

// التبديل بين تبويبات الإدارة
function showAdminTab(tab, btn) {
  document.querySelectorAll(".admin-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".admin-section").forEach(s => s.classList.remove("active"));
  document.getElementById(`adminTab${tab.charAt(0).toUpperCase() + tab.slice(1)}`).classList.add("active");
}

// بناء نموذج إضافة/تعديل منتج
function buildAddForm(product) {
  const editing = !!product;
  if (editing) {
    adminImages = [...(product.images || [])];
    adminColors = product.colors ? product.colors.map(c => ({ ...c })) : [];
    adminSizes = product.sizes ? [...product.sizes] : [];
    editingProductId = product.id;
  } else {
    adminImages = [];
    adminColors = [];
    adminSizes = [];
    editingProductId = null;
  }
  const cats = [
    { val: "shoes", label: "الأحذية" },
    { val: "bags", label: "الحقائب" },
    { val: "hijabs", label: "الحجابات" }
  ];
  return `
    <div id="addFormAlert"></div>
    <div class="field-group">
      <label>اسم المنتج *</label>
      <input type="text" id="fName" placeholder="اسم المنتج" value="${editing ? product.name : ""}"/>
    </div>
    <div class="form-row">
      <div class="field-group">
        <label>القسم الرئيسي *</label>
        <select id="fCat" onchange="updateSubcatOptions()">
          ${cats.map(c => `<option value="${c.val}" ${editing && product.category === c.val ? "selected" : ""}>${c.label}</option>`).join("")}
        </select>
      </div>
      <div class="field-group">
        <label>القسم الفرعي</label>
        <select id="fSubcat">${buildSubcatOptions(editing ? product.category : "shoes", editing ? product.subcategory : "")}</select>
      </div>
    </div>
    <div class="field-group">
      <label>الوصف</label>
      <textarea id="fDesc" placeholder="وصف المنتج">${editing ? product.description : ""}</textarea>
    </div>
    <div class="form-row">
      <div class="field-group">
        <label>السعر بالليرة التركية ₺ *</label>
        <input type="number" id="fPrice" placeholder="مثال: 500" value="${editing ? product.priceTRY : ""}"/>
      </div>
      <div class="field-group">
        <label>الخصم % (اختياري)</label>
        <input type="number" id="fDiscount" placeholder="مثال: 10" min="0" max="99" value="${editing ? product.discount || "" : ""}"/>
      </div>
    </div>
    <div class="field-group">
      <label>المقاسات (اضغط Enter لإضافة)</label>
      <div class="tags-input-wrap" id="sizesWrapAdmin" onclick="document.getElementById('sizeInput').focus()">
        ${adminSizes.map(s => `<span class="tag">${s}<span class="tag-remove" onclick="removeSize('${s}')">✕</span></span>`).join("")}
        <input class="tags-input" id="sizeInput" placeholder="مقاس..." onkeydown="handleSizeInput(event)"/>
      </div>
    </div>
    <div class="field-group">
      <label>الألوان</label>
      <div class="color-inputs" id="colorInputs">
        ${adminColors.map((c, i) => buildColorRow(c.name, c.hex, i)).join("")}
      </div>
      <button class="btn-add-color" onclick="addColorRow()" style="margin-top:8px">+ إضافة لون</button>
    </div>
    <div class="field-group">
      <label>صور المنتج</label>
      <div class="img-upload-area" onclick="document.getElementById('imgInput').click()">
        📷 اضغطي لرفع الصور
        <input type="file" id="imgInput" accept="image/*" multiple style="display:none" onchange="handleImageUpload(event)"/>
      </div>
      <div class="img-previews" id="imgPreviews">${renderAdminImgPreviews()}</div>
    </div>
    <button class="btn-gold" style="margin-top:8px" onclick="saveProduct()">${editing ? "💾 حفظ التعديلات" : "✓ إضافة المنتج"}</button>
  `;
}

// بناء خيارات الأقسام الفرعية
function buildSubcatOptions(cat, selected) {
  const subs = subcategories[cat] || [];
  return subs.map(s => `<option value="${s}" ${s === selected ? "selected" : ""}>${s}</option>`).join("");
}

// تحديث خيارات الأقسام الفرعية عند تغيير القسم الرئيسي
function updateSubcatOptions() {
  const cat = document.getElementById("fCat").value;
  document.getElementById("fSubcat").innerHTML = buildSubcatOptions(cat, "");
}

// إضافة مقاس
function handleSizeInput(e) {
  if (e.key === "Enter" || e.key === ",") {
    e.preventDefault();
    const val = e.target.value.trim();
    if (val && !adminSizes.includes(val)) {
      adminSizes.push(val);
      refreshSizesWrap();
    }
    e.target.value = "";
  }
}

// حذف مقاس
function removeSize(s) {
  adminSizes = adminSizes.filter(x => x !== s);
  refreshSizesWrap();
}

// تحديث عرض المقاسات
function refreshSizesWrap() {
  const wrap = document.getElementById("sizesWrapAdmin");
  if (!wrap) return;
  wrap.innerHTML = adminSizes.map(s => `<span class="tag">${s}<span class="tag-remove" onclick="removeSize('${s}')">✕</span></span>`).join("");
  const inp = document.createElement("input");
  inp.className = "tags-input";
  inp.id = "sizeInput";
  inp.placeholder = "مقاس...";
  inp.addEventListener("keydown", handleSizeInput);
  wrap.appendChild(inp);
}

// بناء سطر لون
function buildColorRow(name, hex, i) {
  return `
    <div class="color-input-row" id="colorRow_${i}">
      <input type="color" value="${hex || '#C9A96E'}" onchange="adminColors[${i}].hex=this.value"/>
      <input type="text" value="${name}" placeholder="اسم اللون (مثال: أسود)" oninput="adminColors[${i}].name=this.value"/>
      <button onclick="removeColorRow(${i})">✕</button>
    </div>
  `;
}

// إضافة سطر لون جديد
function addColorRow() {
  const i = adminColors.length;
  adminColors.push({ name: "", hex: "#C9A96E" });
  document.getElementById("colorInputs").insertAdjacentHTML("beforeend", buildColorRow("", "#C9A96E", i));
}

// حذف سطر لون
function removeColorRow(i) {
  adminColors.splice(i, 1);
  document.getElementById("colorInputs").innerHTML = adminColors.map((c, idx) => buildColorRow(c.name, c.hex, idx)).join("");
}

// رفع الصور ومعالجتها
function handleImageUpload(e) {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    if (file.size > 3 * 1024 * 1024) {
      showToast("⚠️ الصورة أكبر من 3MB، سيتم ضغطها");
    }
    compressAndStore(file);
  });
  e.target.value = "";
}

// ضغط وتخزين الصورة كـ Base64
function compressAndStore(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const MAX = 800;
      let w = img.width, h = img.height;
      if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
      if (h > MAX) { w = Math.round(w * MAX / h); h = MAX; }
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      const data = canvas.toDataURL("image/jpeg", 0.75);
      adminImages.push(data);
      document.getElementById("imgPreviews").innerHTML = renderAdminImgPreviews();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// عرض معاينات الصور في نموذج الإدارة
function renderAdminImgPreviews() {
  return adminImages.map((src, i) => `
    <div class="img-preview-item">
      <img src="${src}" alt="صورة ${i+1}"/>
      <button onclick="removeAdminImg(${i})">✕</button>
    </div>
  `).join("");
}

// حذف صورة من قائمة الرفع
function removeAdminImg(i) {
  adminImages.splice(i, 1);
  const prev = document.getElementById("imgPreviews");
  if (prev) prev.innerHTML = renderAdminImgPreviews();
}

// حفظ المنتج (إضافة أو تعديل)
function saveProduct() {
  const name = document.getElementById("fName")?.value.trim();
  const price = parseFloat(document.getElementById("fPrice")?.value);
  const cat = document.getElementById("fCat")?.value;
  const subcat = document.getElementById("fSubcat")?.value;
  const desc = document.getElementById("fDesc")?.value.trim();
  const discount = parseInt(document.getElementById("fDiscount")?.value) || 0;
  const alertEl = document.getElementById("addFormAlert");
  if (!name || !price || !cat) {
    alertEl.innerHTML = `<div class="alert alert-error">يرجى ملء الحقول المطلوبة: الاسم، القسم، السعر</div>`;
    return;
  }
  const finalColors = adminColors.filter(c => c.name.trim());
  const product = {
    id: editingProductId || `p${Date.now()}`,
    name, category: cat, subcategory: subcat,
    description: desc || "",
    priceTRY: price,
    discount,
    sizes: [...adminSizes],
    colors: finalColors,
    images: [...adminImages]
  };
  if (editingProductId) {
    const idx = products.findIndex(p => p.id === editingProductId);
    if (idx !== -1) products[idx] = product;
  } else {
    products.push(product);
  }
  saveProducts();
  renderProducts();
  alertEl.innerHTML = `<div class="alert alert-success">✓ تم ${editingProductId ? "تعديل" : "إضافة"} المنتج بنجاح</div>`;
  setTimeout(() => renderAdminPanel(), 1200);
}

// بناء قائمة المنتجات في لوحة الإدارة
function buildProductList() {
  if (products.length === 0) return `<p style="color:var(--text-light);text-align:center;padding:30px">لا توجد منتجات بعد</p>`;
  return `
    <ul class="admin-product-list">
      ${products.map(p => {
        const img = p.images?.[0] || FALLBACK_IMAGE;
        return `
          <li class="admin-product-item">
            <img class="admin-prod-img" src="${img}" alt="${p.name}" onerror="this.src=FALLBACK_IMAGE"/>
            <div class="admin-prod-info">
              <div class="admin-prod-name">${p.name}</div>
              <div class="admin-prod-cat">${catLabels[p.category] || p.category} · ${p.subcategory}</div>
            </div>
            <div class="admin-prod-btns">
              <button class="btn-edit" onclick="editProduct('${p.id}')">تعديل</button>
              <button class="btn-delete" onclick="deleteProduct('${p.id}')">حذف</button>
            </div>
          </li>
        `;
      }).join("")}
    </ul>
  `;
}

// تعديل منتج
function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  document.getElementById("adminTabAdd").innerHTML = buildAddForm(product);
  document.querySelectorAll(".admin-tab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".admin-tab")[0].classList.add("active");
  document.querySelectorAll(".admin-section").forEach(s => s.classList.remove("active"));
  document.getElementById("adminTabAdd").classList.add("active");
}

// حذف منتج مع تأكيد
function deleteProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  if (confirm(`هل أنتِ متأكدة من حذف "${product.name}"؟`)) {
    products = products.filter(p => p.id !== id);
    saveProducts();
    renderProducts();
    renderAdminPanel();
  }
}

/* ===================================================
   إشعار Toast
=================================================== */

// عرض رسالة مؤقتة
function showToast(msg) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.id = "globalToast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2500);
}

/* ===================================================
   ربط الأحداث (Event Listeners)
=================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // تحميل البيانات
  loadProducts();
  loadCart();
  renderProducts();

  // تعيين روابط التواصل الاجتماعي
  const wl = document.getElementById("whatsappLink");
  if (wl) wl.href = socialLinks.whatsapp;
  const il = document.getElementById("instagramLink");
  if (il) il.href = socialLinks.instagram;
  const tl = document.getElementById("tiktokLink");
  if (tl) tl.href = socialLinks.tiktok;
  const fl = document.getElementById("facebookLink");
  if (fl) fl.href = socialLinks.facebook;

  // أزرار الفلتر
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.cat));
  });

  // بطاقات الأقسام الرئيسية
  document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => applyFilter(card.dataset.cat));
  });

  // زر السلة في الهيدر
  document.getElementById("cartBtn").addEventListener("click", openCart);

  // إغلاق السلة
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);

  // إغلاق Modal المنتج
  document.getElementById("modalClose").addEventListener("click", closeProductModal);
  document.getElementById("productModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeProductModal();
  });

  // زر الإدارة في الفوتر
  document.getElementById("adminLink").addEventListener("click", openAdmin);

  // إغلاق Modal الإدارة
  document.getElementById("adminModalClose").addEventListener("click", closeAdminModal);
  document.getElementById("adminModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeAdminModal();
  });

  // زر دخول لوحة الإدارة عبر Enter
  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && document.getElementById("adminPass") === document.activeElement) {
      doLogin();
    }
  });
});
