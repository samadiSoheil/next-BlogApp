import "@/styles/globals.css";
import vazirFont from "@/constants/localFonts";
import Header from "@/components/Header";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت وبلاگ فارسی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans h-[2000px]`}>
        <Header />
        <div className="container xl:max-w-screen-xl bg-slate-2000">{children}</div>
      </body>
    </html>
  );
}
