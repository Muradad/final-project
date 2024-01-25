import { FaInstagram } from "react-icons/fa";


function FollowInstagram() {
    const imageUrls = [
        'https://eme-2.myshopify.com/cdn/shop/files/3_53039ec2-8622-4d88-a005-359da989da36_480x280.jpg?v=1655009958',
        'https://eme-2.myshopify.com/cdn/shop/files/1_edd295d1-cb2d-4d21-a4a8-0209cd4e3aec_480x280.jpg?v=1655009906',
        'https://eme-2.myshopify.com/cdn/shop/files/4_255f1de9-2597-4e80-825c-358ab859cd35_480x280.jpg?v=1655009979',
        'https://eme-2.myshopify.com/cdn/shop/files/6_7e1fca24-60d2-4be2-bd05-43a0a0b227b5_480x280.jpg?v=1655009512',
        'https://eme-2.myshopify.com/cdn/shop/files/2_d298a429-b138-489f-b29a-c6e05f02124b_480x280.jpg?v=1655009932',
    ];

    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-28 mb-20'>
                <p className='text-lg text-gray-500'>@Kotre_Store</p>
                <h1 className='text-5xl'>Follow us on Instagram</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {imageUrls.map((imageUrl, index) => (
                    <a key={index} href="#" className=" relative group">
                        <img
                            className="rounded-t-lg p-2 transition-opacity duration-300 group-hover:opacity-80"
                            src={imageUrl}
                            alt={`Instagram ${index + 1}`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                            <a href="https://www.instagram.com/mammedofmurad/?next=%2F">
                            <FaInstagram className="text-blue-800"  size={30}/>

                            </a>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FollowInstagram;
