'use client'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import TransitionEffect from '@/components/TransitionEffect'
import MouseTracking from '@/components/MouseTracking'

export default function Contact() {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef(null)

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append('access_key', 'c197cf33-1230-406f-acf4-eb7c97b8ecfb')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)
    setIsLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })

      const result = await response.json()

      if (response.ok) {
        setSuccess('Your message has been sent successfully!🎉')
        setError(null) // Clear any previous error messages
        if (formRef.current) {
          formRef.current.reset() // Reset the form fields
        }
        setIsLoading(false)
      } else {
        setError(
          'We encountered an issue while processing your request. Please try again.',
        )
        setSuccess(null) // Clear any previous success messages
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Network error:', error)
      setError('Oops! Something went wrong. Please try again later.')
      setSuccess(null) // Clear any previous success messages
    }
  }
  useEffect(() => {
    let timer
    if (success) {
      timer = setTimeout(() => {
        setSuccess('')
      }, 3000) // 3000 milliseconds = 3 seconds
    }
    return () => clearTimeout(timer)
  }, [success])

  useEffect(() => {
    let timer
    if (error) {
      timer = setTimeout(() => {
        setError('')
      }, 3000) // 3000 milliseconds = 3 seconds
    }
    return () => clearTimeout(timer)
  }, [error])

  return (
    <>
      {/* <TransitionEffect />
      <MouseTracking /> */}
      <section className="flex h-[100vh] flex-col items-center justify-center px-3 md:px-5">
        <div className="rounded-3xl bg-brianGreen px-10 py-16 text-start text-black">
          <div className="mb-6 space-y-3">
            <h1 className="w-full font-epilogue text-[50px] font-bold leading-[50px] md:text-[65px] lg:text-[96px] lg:leading-[75px]">
              Contact Me.
            </h1>
            <p className="ps-1 font-poppins">
              Got a project or question? Reach out, and I&apos;ll get back to
              you soon.
            </p>
            <div className="mt-3 flex gap-3 ps-1 text-xl md:text-2xl">
              <a
                href="https://github.com/yhawbee1"
                className="hover:text-brianGreen"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/brian-antwi-a7a136264"
                className="hover:text-brianGreen"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/BrianAntwi23?t=mEdh1IedSFx2GRGo2FEpVA&s=09"
                className="hover:text-brianGreen"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/khelly_spikes?igsh=b2dxODI2MGpwOHhl"
                className="hover:text-brianGreen"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-black bg-black/10 py-5 pe-2 ps-4 font-epilogue backdrop-blur-md placeholder:font-poppins placeholder:text-black focus:border-brianGreen  focus:outline-0 md:text-lg md:placeholder:text-lg "
                name="name"
                required
              />
              <input
                type="email"
                className="w-full rounded-full border border-black bg-black/10 py-5 pe-2 ps-4 font-epilogue backdrop-blur-md placeholder:font-poppins placeholder:text-black focus:border-brianGreen  focus:outline-0 md:text-lg md:placeholder:text-lg "
                placeholder="Email"
                name="email"
                required
              />
              <textarea
                className="h-[150px] w-full rounded-3xl border border-black bg-black/10 py-5 pe-2 ps-4 font-epilogue backdrop-blur-md placeholder:font-poppins placeholder:text-black focus:border-brianGreen focus:outline-0 md:text-lg md:placeholder:text-lg "
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <Button
                className="h-[50px] w-full rounded-full border border-black bg-black font-poppins text-brianGreen hover:bg-brianGreen transition-colors hover:text-black max-[320px]:h-fit md:h-[60px] md:w-[250px] 2xl:text-xl"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  'Send Message'
                )}
              </Button>
              {success && (
                <p className="font-poppins text-green-500">{success}</p>
              )}
              {error && <p className="font-poppins text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
