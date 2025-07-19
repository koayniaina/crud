import Header from "@/components/Sidebar/Side";
import styles from '@/components/Sidebar/Sidebar.module.css'

export default function Layouts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="flex">
        <section>
          <Header />
        </section>
        <section className={styles.children}>{children}</section>
      </main>
    </div>
  );
}
