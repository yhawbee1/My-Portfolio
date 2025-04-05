const Footer = () => {
  return (
    <footer className="border-t py-5 font-poppins text-sm text-gray-400">
      <section className="container flex flex-col md:flex-row justify-between">
        <p>
          © {new Date().getFullYear()} Brian Antwi. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a className="hover:underline transition-all duration-300" href="https://github.com/brianantwi">GitHub</a>
          <a className="hover:underline transition-all duration-300" href="https://www.linkedin.com/in/brian-antwi-a7a136264">LinkedIn</a>
          <a className="hover:underline transition-all duration-300" href="https://x.com/BrianAntwi23?t=mEdh1IedSFx2GRGo2FEpVA&s=09">X</a>
          <a className="hover:underline transition-all duration-300" href="https://www.instagram.com/khelly_spikes?igsh=b2dxODI2MGpwOHhlNzQ=">
            Instagram
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
