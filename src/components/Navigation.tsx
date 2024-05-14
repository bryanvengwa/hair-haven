'use client';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import { useState, useContext, useEffect } from 'react';
import { NavigationContext } from '@/app/context/NavigationContext';
import NavigationLink from './NavigationLink';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import {
  ShoppingBagIcon,
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import ProjectLink from './ProjectLink';
import ProjectNavigation from './ProjectNavigation';
import { BsBarChart } from 'react-icons/bs';
import Link from 'next/link';

interface PropTypes {
  isOpen: boolean;
  setIsOpen: Function;
}

const containerVariants = {
  close: {
    width: '7%',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const { isOpen, toggle } = useContext(NavigationContext);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start('open');
      svgControls.start('open');
    } else {
      containerControls.start('close');
      svgControls.start('close');
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    toggle();
    setSelectedProject(null);
  };

  return (
    <aside className={`${!isOpen ? "hidden lg:block" : ''}`}>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className=" flex bg-white flex-col z-10 gap-20 p-5 absolute w-full   top-0  left-0 h-full "
       
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <Link href={'/'}>
            <Image src={logo} height={90} width={140} alt="logo" />
          </Link>
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-black-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <NavigationLink name="Dashboard" href="/admin/">
            <ChartBarIcon className="stroke-inherit stroke-[0.75] text-black min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Products" href="/admin/products">
            <ShoppingBagIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Tasks" href="">
            <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Reporting">
            {/* <BoxIcon /> */}
            <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Users" href="/admin/users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>
        <div className="flex flex-col gap-3">
          <ProjectLink
            name="Virtual Reality"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700" />
          </ProjectLink>
          <ProjectLink
            name="Apple Vision Pro"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700" />
          </ProjectLink>

          <ProjectLink
            name="Secret Project"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700" />
          </ProjectLink>
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectNavigation
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            isOpen={isOpen}
          />
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Navigation;
