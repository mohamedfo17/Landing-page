import React from 'react'

const Content2 = () => {
  const plans = [
    {
      name: 'Basic',
      features: [
        'Process Analysis',
        'Task Management',
        'Time Tracking',
        'Performance Metrics',
        'Customizable Reports',
        'Email Integration'
      ]
    },
    {
      name: 'Pro',
      features: [
        'Process Analysis',
        'Task Management',
        'Time Tracking',
        'Performance Metrics',
        'Customizable Reports',
        'Email Integration',
        'Real-time Collaboration',
        'Automated Workflows'
      ]
    },
    {
      name: 'Business',
      features: [
        'Process Analysis',
        'Task Management',
        'Time Tracking',
        'Performance Metrics',
        'Customizable Reports',
        'Email Integration',
        'Real-time Collaboration',
        'Automated Workflows',
        'Analytics Dashboard',
        'SLA Management'
      ]
    }
  ];

  return (
    <div className='mt-25 sm:ml-60 md:ml-40 ml-20 mr-10'>
      <h2 className='text-3xl'>Compare Features</h2>
      
      <div className='mt-10 flex flex-row justify-between mx-10'>
        <h3 className='w-1/3 text-xl font-semibold'>Basic</h3>
        <h3 className='w-1/3 text-xl font-semibold hidden md:flex '>Pro</h3>
        <h3 className='w-1/3 text-xl font-semibold hidden md:flex'>Business</h3>
      </div>
      
      <div className="divider bg-[#d9d9d9] h-0.5 md:mx-10 mt-4"></div>
      
      <div className='flex flex-col md:flex-row justify-between md:mx-10 mt-10 '>
        <div className='w-1/3'>
          <ul className='space-y-4'>
            {plans[0].features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-blue-600 mr-3">✔</span>
                <div className="text-gray-700 whitespace-nowrap">{feature}</div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className='w-1/3'>
         <h3 className='w-1/3 text-xl font-semibold md:hidden flex mt-5 '>Pro</h3>
         <div className="divider bg-[#d9d9d9] h-0.5 sm:mx-10 mt-4 md:hidden flex"></div>

          <ul className='space-y-4'>
            {plans[1].features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-blue-600 mr-3">✔</span>
                <div className="text-gray-700 whitespace-nowrap">{feature}</div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className='w-1/3'>
          <h3 className='w-1/3 text-xl font-semibold md:hidden flex mt-5'>Business</h3>
                   <div className="divider bg-[#d9d9d9] h-0.5 sm:mx-10 mt-4 md:hidden flex"></div>

          <ul className='space-y-4'>
            {plans[2].features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-blue-600 mr-3">✔</span>
                <div className="text-gray-700 whitespace-nowrap">{feature}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content2