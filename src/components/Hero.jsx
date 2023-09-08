import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import bvid from '../assets/vid.mp4'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className = "w-5 h-5 rounded-full bg-[#65a30d]"/>
            <div className="w-1 sm:h-80 h-40 green-gradient"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <span className ="text-[#58ee4d]">Learn</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Unlock the future by mastering <br className="sm:block hidden"/> the language of technology today.
            </p>
          </div>
        </div>
       
       <ComputersCanvas/>
       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.dev
                animate = {{
                  y:[0,24,0]
                }}
                transition ={{
                  duration:1.5,
                  repeat : Infinity,
                  repeatType : 'loop'
                }}
                className ="w-3 h-3 rounded-full bg-secondary mb-1"
              /></div>
          </a>
       </div>
    </section>
    
    // <section className='relative w-full h-screen mx-auto'>
    //   <div>Hero</div><video className='w-full h-full object-cover' src={bvid} autoPlay loop muted/>
    // </section><div className='w-full h-screen relative'></div>
    
  );
};

export default Hero;