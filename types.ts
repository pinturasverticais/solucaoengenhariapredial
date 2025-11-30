import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  building: string;
  text: string;
}

export interface Comparison {
  id: number;
  title: string;
  beforeImg: string;
  afterImg: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}