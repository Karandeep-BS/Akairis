'use client'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'


export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className=" mx-auto px-4 py-10 flex flex-row justify-between gap-10">
        <LeftContainer
          width="w-full "
          padding="p-4"
        />
        <RightContainer
          width="w-full "
          padding="p-4"
        />
      </div>
    </footer>
  )
}
