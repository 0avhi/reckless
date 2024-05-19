import { Inter ,Montserrat} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const monst=Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Reckless",
  description: "Be Reckless",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monst.className}>{children}</body>
    </html>
  );
}
