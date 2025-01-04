import Navbar from "@/components/ui/navbar/navbar";
import Provider from "@/lib/providers";

export default function LayoutWithNav({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-monument overflow-x-hidden">
        <Provider>
          <Navbar />
          <div className="pt-20">{children}</div>
          <div className="noise" />
        </Provider>
      </body>
    </html>
  );
}
