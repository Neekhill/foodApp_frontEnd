import React from 'react'

function Footer() {
    return (
        <>
            <div className="bg-gray-900 text-gray-50 p-20   grid grid-cols-1 justify-items-left gap-x-2 gap-y-4 sm:grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-4 md:gap-y-16">
                <div>
                    <h4 className="text-xl mb-3">Company</h4>
                    <ul>
                        <li >About</li>
                        <li>My Orders</li>
                        <li >Blog</li>
                        <li >Careers</li>
                        <li >Contact</li>
                        <li >Report Fraud</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl mb-3">For You</h4>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Security </li>
                        <li>Sitemap</li>
                        <li>Code of Conduct</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl mb-3">Stack Used</h4>
                    <ul>
                        <li>React</li>
                        <li>MongoDB Atlas</li>
                        <li>Express</li>
                        <li>Nodejs</li>
                        <li>Tailwindcss</li>
                    </ul>
                </div>

                <div>
                    <div className="mb-5">
                        <h4 className="text-xl">FoodApp NewsLetter</h4>
                        <h5>Stay updated with new offers from FoodApp</h5>
                    </div>
                    <form>
                        <input type="email" placeholder="Your email address" className="px-4 py-2" />
                        <button className="px-3 py-2 bg-gray-600">SEND</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Footer



