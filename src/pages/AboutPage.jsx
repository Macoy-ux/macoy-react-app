import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
            <Header/>
            <h1 className="text-4xl font-bold mb-6">About McoyShop</h1>
            <p className="text-lg text-center max-w-2xl mb-4">
                Welcome to McoyShop! We are dedicated to providing you with the best shopping experience, offering a wide range of products that cater to your needs. Our mission is to deliver quality products at affordable prices while ensuring excellent customer service.
            </p>
            <p className="text-lg text-center max-w-2xl mb-4">
                At McoyShop, we believe in the power of community and strive to create a shopping environment that is inclusive and welcoming to all. Whether you're looking for the latest trends or timeless classics, we have something for everyone.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
            <p className="text-lg text-center max-w-2xl mb-4">
                If you have any questions or feedback, feel free to reach out to us at:
            </p>
            <p className="text-lg text-center font-bold">support@moyshop.com</p>
            <p className="text-lg text-center">Phone: (123) 456-7890</p>
            <Footer/>
        </div>
    );
};

export default AboutPage;