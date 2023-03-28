import React, { forwardRef } from "react";

import ContactMe from "../../containers/contact-me/contact-me.container";
import Copyright from '../../components/copyright/copyright.component';

import { ContactStyle, Info } from './contact.style';

const ContactSection = forwardRef((_, ref) => {

    return (
        <ContactStyle ref={ref}>
            <ContactMe />
            <Info>
                <p>Inspired by Brittany Chiang</p>
                <Copyright />
            </Info>
        </ContactStyle>
    )
});

export default ContactSection;