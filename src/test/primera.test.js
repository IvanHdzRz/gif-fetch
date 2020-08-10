import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import ImageItem from '../components/ImageItem/ImageItem'

describe('pruebas en  componenteimageItem',()=>{
    test('debe renderizar componente',()=>{
        //preparacion
        const image={title:'example',url:'http://hola.com',id:'12345'}
        //estimulo
        const wrapper=shallow(<ImageItem {...image} />)
        //se espera
        expect(wrapper).toMatchSnapshot();
    })
})
