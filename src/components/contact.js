import React from 'react';
import './contact.css'

export default function Contact() {
    return (
        <div className='form-outer-box-css'>
            <form class="jotform-form" id="222856703964465" accept-charset="utf-8" autocomplete="on">
                <input type="hidden" name="formID" value="222856703964465" />
                <input type="hidden" id="JWTContainer" value="" />
                <input type="hidden" id="cardinalOrderNumber" value="" />
                <div role="main" class="form-all">
                    <ul class="form-section page-section">
                        <li id="cid_5" class="form-input-wide" data-type="control_head">
                            <div class="form-header-group  header-large">
                                <div class="header-text httac htvam">
                                    <h1 id="header_5" class="form-header" data-component="header">
                                        Contact Us
                                    </h1>
                                    <div id="subHeader_5" class="form-subHeader">
                                        We will get back to you asap!
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_fullname" id="id_9" data-compound-hint="First Name,Last Name">
                            <label class="form-label form-label-top form-label-auto" id="label_9" for="first_9"> Name </label>
                            <div id="cid_9" class="form-input-wide">
                                <div data-wrapper-react="true">
                                    <span class="form-sub-label-container" style={{verticalAlign:"top"}} data-input-type="first">
                                        <input type="text" id="first_9" name="q9_name[first]" class="form-textbox" data-defaultvalue="" autoComplete="section-input_9 given-name" size="10" value="" placeholder="First Name" data-component="first" aria-labelledby="label_9" />
                                    </span>
                                    <span class="form-sub-label-container" style={{verticalAlign:"top"}} data-input-type="last">
                                        <input type="text" id="last_9" name="q9_name[last]" class="form-textbox" data-defaultvalue="" autoComplete="section-input_9 family-name" size="15" value="" placeholder="Last Name" data-component="last" aria-labelledby="label_9" />
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_email" id="id_10">
                            <label class="form-label form-label-top form-label-auto" id="label_10" for="input_10"> Email </label>
                            <div id="cid_10" class="form-input-wide">
                                <input type="email" id="input_10" name="q10_email" class="form-textbox validate[Email]" data-defaultvalue="" size="30" value="" placeholder="Email" data-component="email" aria-labelledby="label_10" />
                            </div>
                        </li>
                        <li class="form-line" data-type="control_phone" id="id_11" data-compound-hint="Phone">
                            <label class="form-label form-label-top form-label-auto" id="label_11" for="input_11_full"> Phone Number </label>
                            <div id="cid_11" class="form-input-wide">
                                <span class="form-sub-label-container" style={{verticalAlign:"top"}}>
                                    <input type="tel" id="input_11_full" name="q11_phoneNumber[full]" data-type="mask-number" class="mask-phone-number form-textbox validate[Fill Mask]" data-defaultvalue="" autoComplete="section-input_11 tel-national" data-masked="true" value="" placeholder="Phone" data-component="phone" aria-labelledby="label_11" />
                                    <label class="form-sub-label" for="input_11_full" id="sublabel_11_masked" style={{minHeight:"13px"}} aria-hidden="false">  </label>
                                </span>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_button" id="id_8">
                            <div id="cid_8" class="form-input-wide">
                                <div style={{marginLeft:"156px"}} data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                                    <button id="input_8" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_text" id="id_12">
                            <div id="cid_12" class="form-input-wide">
                                <div id="text_12" class="form-html" data-component="text" tabindex="0">
                                    You may also call us at 333-33-33
                                </div>
                            </div>
                        </li>
                        <li style={{display:"none"}}>
                            Should be Empty:
                            <input type="text" name="website" value="" />
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}
