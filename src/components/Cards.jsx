import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card'

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <Card 
            type="secondary"
            image={Single} 
            user_type="Single User" 
            price="$149" 
            storage="500 GB Storage" 
            no_of_users="1 Granted User" 
            sending_bandwidth="Send up to 2 GB" />
            <Card 
            type="main"
            image={Double} 
            user_type="Partnership" 
            price="$199" 
            storage="1 TB Storage" 
            no_of_users="3 Users Allowed" 
            sending_bandwidth="Send up to 10 GB" />
            <Card 
            type="secondary"
            image={Triple} 
            user_type="Group Account" 
            price="$299" 
            storage="5 TB Storage" 
            no_of_users="10 Users Allowed" 
            sending_bandwidth="Send up to 20 GB" />
        </div>
    </div>
  )
}

export default Cards