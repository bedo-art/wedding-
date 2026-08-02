<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>حفل زفاف منة الله و محمد</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Cairo', sans-serif;
            background-color: #fff5f8;
            color: #3f1f36;
        }
        h1, h2, h3, .font-serif {
            font-family: 'Amiri', serif;
        }
        .card-3d {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            transform-style: preserve-3d;
        }
        .card-3d:hover {
            transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
            box-shadow: 0 20px 30px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body class="selection:bg-rose-200">
    <!-- Hero Section -->
    <header id="vanta-bg" class="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 via-pink-50 to-amber-100 text-center px-4 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fbcfe8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div class="relative z-10 max-w-2xl mx-auto space-y-6 card-3d bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-emerald-100">
            <span class="text-rose-600 uppercase tracking-widest text-sm font-semibold">نتشرف بحضوركم حفل زفافنا المبارك</span>
            <h1 class="text-4xl md:text-6xl font-serif text-rose-900 tracking-tight leading-relaxed">✨مَـنَةُ الـلَّـهِ & مُـحَـمَّـد ✨</h1>
            <p class="text-lg text-pink-700 font-light">شاركونا الفرحة وأجمل لحظات العمر</p>
            
            <div class="py-4 border-y border-rose-100 flex justify-around text-rose-900">
                <div>
                    <span class="block text-xs uppercase text-slate-400">التاريخ</span>
                    <span class="font-serif font-medium">٢٥ أغسطس ٢٠٢٦</span>
                </div>
                <div class="border-l border-rose-100"></div>
                <div>
                    <span class="block text-xs uppercase text-slate-400">المكان</span>
                    <span class="font-serif font-medium"> شربين /عزبة موسي شكري</span>
                </div>
            </div>

            <!-- Location Map Button -->
            <div>
                <a href="https://maps.app.goo.gl/RA8HSDRKqvE4ZL6c7" target="_blank" class="inline-flex items-center justify-center gap-2 w-full bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-medium py-2.5 px-4 rounded-xl transition text-sm shadow-sm">
                    📍 اضغط هنا لعرض موقع القاعة على الخريطة
                </a>
            </div>

            <!-- Embedded Location Map -->
            <div class="mt-6 rounded-3xl overflow-hidden border border-rose-100 shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d788.4192098167676!2d31.52349792847598!3d31.240082998389813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE0JzI0LjMiTiAzMcKwMzEnMjYuOSJF!5e1!3m2!1sen!2seg!4v1785639926209!5m2!1sen!2seg" width="600" height="450" style="border:0; width: 100%; height: 450px;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>

            <!-- Countdown Timer -->
            <div id="countdown" class="grid grid-cols-4 gap-2 pt-2 text-rose-900">
                <div class="bg-rose-50 p-3 rounded-xl">
                    <span id="days" class="text-2xl font-bold block">00</span>
                    <span class="text-xs uppercase text-rose-600">أيام</span>
                </div>
                <div class="bg-rose-50 p-3 rounded-xl">
                    <span id="hours" class="text-2xl font-bold block">00</span>
                    <span class="text-xs uppercase text-rose-600">ساعات</span>
                </div>
                <div class="bg-rose-50 p-3 rounded-xl">
                    <span id="minutes" class="text-2xl font-bold block">00</span>
                    <span class="text-xs uppercase text-rose-600">دقائق</span>
                </div>
                <div class="bg-rose-50 p-3 rounded-xl">
                    <span id="seconds" class="text-2xl font-bold block">00</span>
                    <span class="text-xs uppercase text-rose-600">ثوانٍ</span>
                </div>
            </div>

            <a href="#rsvp" class="inline-block mt-4 bg-rose-600 hover:bg-rose-700 text-white font-medium px-8 py-3 rounded-full transition shadow-lg shadow-rose-600/30">تأكيد الحضور</a>
        </div>
    </header>

    <!-- Gallery Section -->
    <section class="py-20 px-4 max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <span class="text-rose-600 uppercase tracking-widest text-sm font-semibold">لحظات مباركة</span>
            <h2 class="text-4xl font-serif text-slate-800 mt-1">معرض الصور</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card-3d overflow-hidden rounded-2xl shadow-md bg-white p-2 border border-slate-100">
                <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600" alt="خواتم الزفاف" class="w-full h-72 object-cover rounded-xl">
            </div>
            <div class="card-3d overflow-hidden rounded-2xl shadow-md bg-white p-2 border border-slate-100">
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600" alt="ورود وأجواء احتفالية" class="w-full h-72 object-cover rounded-xl">
            </div>
            <div class="card-3d overflow-hidden rounded-2xl shadow-md bg-white p-2 border border-slate-100">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600" alt="ديكور الحفل" class="w-full h-72 object-cover rounded-xl">
            </div>
        </div>
    </section>

    <!-- RSVP Section -->
    <section id="rsvp" class="py-20 bg-rose-50/50 px-4">
        <div class="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-rose-100 card-3d">
            <div class="text-center mb-8">
                <span class="text-rose-600 uppercase tracking-widest text-sm font-semibold">كن ضيفنا</span>
                <h2 class="text-3xl font-serif text-rose-900 mt-1">تأكيد الحضور</h2>
                <p class="text-rose-600 text-sm mt-1">يرجى إعلامنا إذا كنت تستطيع تشريفنا بالحضور</p>
            </div>
            <form onsubmit="handleRSVP(event)" class="space-y-4">
                <div>
                    <label class="block text-xs uppercase tracking-wider text-slate-500 mb-1">الاسم الكامل</label>
                    <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-rose-50 text-sm">
                </div>
                <!-- New WhatsApp Field -->
                <div>
                    <label class="block text-xs uppercase tracking-wider text-slate-500 mb-1">رقم الواتساب</label>
                    <input type="tel" id="whatsapp" name="whatsapp" required dir="ltr" placeholder="01x xxxx xxxx" class="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-rose-50 text-sm text-right">
                </div>
                <div>
                    <label class="block text-xs uppercase tracking-wider text-slate-500 mb-1">هل ستكون حاضرًا؟</label>
                    <select id="attendance" name="attendance" class="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-rose-50 text-sm">
                        <option>أؤكد الحضور بكل سرور</option>
                        <option>أعتذر عن عدم الحضور</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs uppercase tracking-wider text-slate-500 mb-1">عدد المرافقين</label>
                    <input type="number" id="guests" name="guests" min="1" max="5" value="1" class="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-rose-50 text-sm">
                </div>
                <div>
                    <label class="block text-xs uppercase tracking-wider text-slate-500 mb-1">رسالة التهنئة</label>
                    <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-rose-50 text-sm" placeholder="اكتب تهنئتك هنا..."></textarea>
                </div>
                <button type="submit" class="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 rounded-xl transition shadow-lg shadow-rose-600/30 mt-2">إرسال التأكيد</button>
            </form>
            <div id="rsvp-success" class="hidden text-center text-emerald-600 font-medium mt-4">شكرًا لك! تم استلام تأكيد حضورك بنجاح.</div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 text-center text-sm text-slate-400 bg-white border-t border-slate-100">
        <p>&copy; ٢٠٢٦ حفل زفاف منة الله و محمد. جميع الحقوق محفوظة.</p>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
    <script>
        VANTA.BIRDS({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xbcd9ed,
            color1: 0xc522bd,
            color2: 0xf4f4f4,
            colorMode: "variance",
            birdSize: 1.70,
            wingSpan: 36.00,
            speedLimit: 3.00,
            separation: 43.00,
            alignment: 51.00,
            cohesion: 67.00,
            backgroundAlpha: 0.48
        });

        const weddingDate = new Date("August 25, 2026 00:00:00").getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const diff = weddingDate - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById("days").innerText = String(days).padStart(2, '0');
                document.getElementById("hours").innerText = String(hours).padStart(2, '0');
                document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
                document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
            }
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();

        async function handleRSVP(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const attendance = document.getElementById('attendance').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;

            const formData = new FormData();
            formData.append('access_key', '9918f5df-b5e9-4eee-82a6-36f0061bf600');
            formData.append('name', name);
            formData.append('attendance', attendance);
            formData.append('guests', guests);
            formData.append('message', message);
            formData.append('subject', 'تأكيد حضور وتهنئة زفاف جديدة!');

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                if (response.status === 200) {
                    document.querySelector('form').reset();
                    document.getElementById('rsvp-success').classList.remove('hidden');
                } else {
                    alert('حدث خطأ أثناء إرسال البيانات، يجدر المحاولة لاحقاً.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('فشل الاتصال بالخادم.');
            }
        }
    </script>
</body>
</html>
