'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'
import NavigationLinks from './NavigationLinks'
import LicenceLinks from './LicenceLinks'
import ContactInfo from './ContactInfo'

export default function RightContainer({ width, padding, speed = '2s' }) {
  const ref = useScrollAnimation({ duration: speed })

  return (
    <div ref={ref} className={`fade-start ${width} ${padding} flex justify-center gap-6`}>
      <NavigationLinks />
      <LicenceLinks />
      <ContactInfo />
    </div>
  )
}
