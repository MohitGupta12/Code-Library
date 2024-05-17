"use client"
import React, { useState } from 'react';
import { UilPlusCircle } from '@iconscout/react-unicons';
import { UilTimesCircle } from '@iconscout/react-unicons';
import { UilArrow } from '@iconscout/react-unicons';
import { UilTextFields } from '@iconscout/react-unicons';
import { UilImage } from '@iconscout/react-unicons';
const AddButton = ({isOpen, setIsOpen}) => {


    const handleButtonClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className=" flex flex-row items-center">
            <button
                className=" text-white rounded-lg transition-colors flex items-center"
                onClick= {handleButtonClick}
            >
                {isOpen ? (
                    <>
                        <UilTimesCircle color = "red" size = "26" />{/* Change the icon to X on hover */}
                    </>
                ) : (
                    <>
                       <UilPlusCircle color = "green" size = "26"/> {/* Default icon is + */}
                    </>
                )}
            </button>
            {isOpen && (
            <div className=" flex flex-row">
                <div className="px-2">
                    <UilTextFields  color = "green" size = "20" />
                </div>
                <div className="px-2">
                    <UilArrow  color = "green" size = "20" />
                </div>
                <div className="px-2">
                    <UilImage  color = "green" size = "20" />
                </div>
            </div>
            )}
        </div>
    );
};

export default AddButton;