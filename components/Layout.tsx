// import Footer from "./Footer";
import NavBar from "./NavBar";
import dynamic from 'next/dynamic'
const DynamicFooter = dynamic(() => import('./Footer'))

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="mx-auto max-w-5xl">
      <NavBar />
      {children}
      <DynamicFooter />
    </div>
  )
}