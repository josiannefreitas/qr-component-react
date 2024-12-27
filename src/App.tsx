import qrCode from './assets/qr.svg'

export default function App() {
  return (
    <main className="bg-white w-80 rounded-2xl flex flex-col px-4 pt-4 pb-10 gap-6 shadow-shadow">
      <div className="bg-blue-600 rounded-xl p-16">
        <img src={qrCode} alt="QR Code" />
      </div>
      <div className="font-serif antialiased text-center flex flex-col px-4 gap-4">
        <h1 className="text-xl font-bold leading-relaxed text-slate-900">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-sm font-normal tracking-wide leading-snug text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </main>
  )
}
