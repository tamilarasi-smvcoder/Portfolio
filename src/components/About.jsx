import React from 'react';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';


const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5* index,0.75)}
        className ="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducation</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        
        
        <a href="https://tamilarasi-smvcoder.github.io/Practice/3D-Flip-Book/index.html" target="_blank">
          <button className="bg-orange-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            Java Books
          </button>
        </a>

      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-lime-200 text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        கற்போம் கற்பிப்போம்  கற்றல் இயக்கம் என்னவென்றால் வளர்ந்து வரும் விஞ்ஞான உலகத்தில் கற்றல் என்பது மிக குறைவாக இருக்கிறது பள்ளி மற்றும் கல்லூரிகளில் படிக்கும் மாணவர்கள் மதிப்பெண் வாங்குவதற்காக மட்டுமே படிக்கிறார்கள் . நமது பாடத்திட்டம் என்பது தொழில்நுட்பத்தை கற்றுக்கொண்டு தொழிலை செய்வதற்கான பாடத்திட்டமாக இல்லை அது மிகவும் அடிப்படையான பாடத்திட்டமாக இருக்கிறது இந்த குறைபாடுகளை நாம் தீர்க்க வேண்டும் என்று சொன்னால் உலக விஞ்ஞான படிப்புகளை நாம் ஆர்வமாக தானா கற்றுக் கொள்ளக்கூடிய ஒரு அறிவை பெற வேண்டும் நாம் கற்றதை மற்றவர்களுக்கு கற்றுக் கொடுக்க வேண்டும் அதற்காக தொடங்கப்பட்ட ஒரு இயக்கம் தான் கற்போம் கற்பிப்போம் கற்றல் இயக்கம்


        இந்த இயக்கத்தின் நோக்கம் என்னவென்றால் ஒவ்வொரு மாணவன் மாணவிகளும் ஆழமான தொழில்கல்வியை கற்றுக்கொண்டு விஞ்ஞானம் படைக்க கூடிய அறிவை வளர்த்துக் கொண்டு நாம் பிறந்த நாட்டிற்கு பெருமை சேர்க்க வேண்டும் படித்து முடித்தவுடன் நல்ல வேலை கிடைக்க வேண்டும் இதன் மூலமாக  நம் நாட்டிற்கும் குடும்பத்திற்கும் பொருளாதார வளர்ச்சி அடைய வேண்டும்.
        
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
       
      </div>
      
      
    </>
  )
  
}

export default SectionWrapper(About,"about")