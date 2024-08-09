import React from 'react'

const Stats = () => {
    const stats = [
        { description : 'of all prescriptions dispensed in 2023', value: '76%' },
        { description : 'of all prescriptions dispensed in 2023', value: '95%' },
        { description : 'of all prescriptions dispensed in 2023', value: '74%' },
    ]
  return (
    <div className="flex items-center justify-center md:gap-10">
        {stats.map((stat, index) => (
            <div key={index} className="flex flex-row items-center justify-center gap-2 md:w-full w-1/3">
                <div className='flex flex-col'>
                    <h2 className="md:text-4xl text-xl font-bold text-center text-blue_anmac">{stat.value}</h2>
                    <p className="text-center text-sm text-gray-500">{stat.description}</p>
                </div>
                {
                    index !== stats.length - 1 && <hr className="border-r-2 border-blue_anmac h-20" />
                }
            </div>
        ))}
    </div>
  )
}

export default Stats