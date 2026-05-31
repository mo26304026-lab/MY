export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fire to-amber flex items-center justify-center text-lg shadow-md">
            🍗
          </div>
          <span className="font-tajawal font-black text-xl">كتاكي</span>
        </div>
        <p className="text-white/25 text-sm mb-2">
          وجبات سريعة • مشروبات ساخنة وباردة
        </p>
        <p className="text-white/15 text-xs flex items-center justify-center gap-1">
          📍 ود مدني — جوار مجمع البركات
        </p>
        <div className="mt-6 pt-6 border-t border-white/[0.04]">
          <p className="text-white/10 text-[11px]">
            © {new Date().getFullYear()} كتاكي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
