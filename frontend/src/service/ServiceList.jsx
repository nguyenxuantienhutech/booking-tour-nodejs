import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData  =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Mô tả cũng chỉ là để mô tả mà thôi không có tác dụng gì khác."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Mô tả cũng chỉ là để mô tả mà thôi không có tác dụng gì khác."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Mô tả cũng chỉ là để mô tả mà thôi không có tác dụng gì khác."
    },
]

const ServiceList = () => {
    return (
    <>
        {
        servicesData.map((item, index) => (
            <Col lg = "3" key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
    );
};

export default ServiceList