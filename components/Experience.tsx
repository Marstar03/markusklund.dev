"use client";

import { currentPositions, lifeEvents } from '@/data'
import React, { JSX } from 'react'
import { Button } from './ui/MovingBorders'
import Modal from './ui/Modal'
import { Timeline } from "@/components/ui/timeline";

const Experience = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
    const timelineData = Object.values(
      lifeEvents.reduce((acc, experience) => {
        if (!acc[experience.year]) {
          acc[experience.year] = {
            title: experience.year,
            content: [],
          };
        }
        acc[experience.year].content.push(
          <div key={experience.id} className="mb-6">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-semibold">
              {experience.title}
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              {experience.desc}
            </p>
          </div>
        );
        return acc;
      }, {} as Record<string, { title: string; content: JSX.Element[] }>)
    );

    return (
      <div className='py-20' id='experience'>

        <h1 className='text-4xl font-extrabold text-center text-gray-800 dark:text-white tracking-tight'>
          My <span className='text-purple-600'>work experience</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {currentPositions.map((card) => (
            <Button key={card.id} style={{ borderRadius: '1.75rem' }} duration={100000*card.id} className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => setIsModalOpen(true)} className='text-sm md:text-base text-purple hover:underline'>
            Show full timeline
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Work Experience Timeline">
          <Timeline data={timelineData} />
        </Modal>
      </div>
    )
}

export default Experience;
