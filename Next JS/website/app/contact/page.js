import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      I am contact US
      <Script>
        alert("Hello World  ")
      </Script>
    </div>

  )
}

export default contact

export const metadata = {
  title: "This is Contact Page",
  description: "Contact page and description page",
};
