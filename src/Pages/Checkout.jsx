import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { getCourseById } from "../../db";

function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardType: "",
    saveInfo: false
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Fetch course data
  useEffect(() => {
    if (id) {
      const courseData = getCourseById(Number(id));
      if (courseData) {
        setCourse(courseData);
      } else {
        navigate("/courses");
      }
    }
  }, [id, navigate]);

  // Calculate totals
  const subtotal = course ? parseFloat(course.newPrice.replace('$', '')) : 0;
  const discount = 0;
  const taxRate = 5;
  const tax = (subtotal - discount) * (taxRate / 100);
  const total = subtotal - discount + tax;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  // Handle card number input
  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
    if (errors.cardNumber) {
      setErrors(prev => ({ ...prev, cardNumber: null }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nameOnCard.trim()) {
      newErrors.nameOnCard = "Name on card is required";
    }
    
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    
    if (!formData.expirationDate.trim()) {
      newErrors.expirationDate = "Expiration date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = "Use format MM/YY";
    }
    
    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }
    
    if (!formData.cardType) {
      newErrors.cardType = "Please select a card type";
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to success page or show success message
      navigate("/payment-success", { state: { course, total } });
    }, 2000);
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#49BBBD] text-2xl">Loading checkout...</div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      
      {/* Header Banner */}
      <div className="bg-[#49BBBD] py-16 px-4 sm:px-8 lg:px-36">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Checkout</h1>
        <p className="text-white/90 mt-2">Complete your enrollment in {course.name}</p>
      </div>

      {/* Main Content */}
      <div className="bg-[#f3f2f2] py-10 px-4 sm:px-8 lg:px-36">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Payment Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#2F327D]">Payment Details</h2>
              
              {/* Card Type Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-3">
                  Card Type <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 flex-1 min-w-[120px] ${
                    formData.cardType === 'amex' 
                      ? 'border-[#49BBBD] bg-[#f0f9ff]' 
                      : 'border-gray-200 hover:border-[#49BBBD]'
                  }`}>
                    <input
                      type="radio"
                      name="cardType"
                      value="amex"
                      checked={formData.cardType === 'amex'}
                      onChange={handleInputChange}
                      className="mr-2 accent-[#49BBBD]"
                    />
                    <span className="flex items-center">
                      <i className="fab fa-cc-amex text-2xl mr-2 text-blue-600"></i>
                      American Express
                    </span>
                  </label>
                  
                  <label className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 flex-1 min-w-[120px] ${
                    formData.cardType === 'visa' 
                      ? 'border-[#49BBBD] bg-[#f0f9ff]' 
                      : 'border-gray-200 hover:border-[#49BBBD]'
                  }`}>
                    <input
                      type="radio"
                      name="cardType"
                      value="visa"
                      checked={formData.cardType === 'visa'}
                      onChange={handleInputChange}
                      className="mr-2 accent-[#49BBBD]"
                    />
                    <span className="flex items-center">
                      <i className="fab fa-cc-visa text-2xl mr-2 text-blue-800"></i>
                      Visa
                    </span>
                  </label>
                </div>
                {errors.cardType && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardType}</p>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Name on Card */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Name on Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    placeholder="Enter name on Card"
                    className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-[#49BBBD] transition-colors duration-300 ${
                      errors.nameOnCard ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.nameOnCard && (
                    <p className="text-red-500 text-sm mt-1">{errors.nameOnCard}</p>
                  )}
                </div>

                {/* Card Number */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="Enter Card Number"
                    maxLength="19"
                    className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-[#49BBBD] transition-colors duration-300 ${
                      errors.cardNumber ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                  )}
                </div>

                {/* Expiration Date and CVV */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-bold mb-2">
                      Expiration Date (MM/YY) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-[#49BBBD] transition-colors duration-300 ${
                        errors.expirationDate ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.expirationDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.expirationDate}</p>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-gray-700 font-bold mb-2">
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="Enter CVV"
                      maxLength="4"
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-[#49BBBD] transition-colors duration-300 ${
                        errors.cvv ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                {/* Save Information Checkbox */}
                <div className="mb-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className="w-5 h-5 accent-[#49BBBD]"
                    />
                    <span className="ml-2 text-gray-700">
                      Save my information for faster checkout
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#49BBBD] text-white font-bold py-4 rounded-lg text-lg hover:bg-[#3aa9ab] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Payment...
                    </span>
                  ) : (
                    'Complete Purchase'
                  )}
                </button>
              </form>

              {/* Security Notice */}
              <div className="mt-6 text-center text-gray-500 text-sm">
                <i className="fas fa-lock text-[#49BBBD] mr-2"></i>
                Your payment information is secure and encrypted
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3 ">
            <div className="bg-[#f0f9ff] rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-[#2F327D]">Summary</h2>
              
              {/* Course Items */}
              <div className="space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-semibold text-gray-800 mb-2">{course.name}</p>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>adipiscing elit, sed do eiusmod tempor</span>
                    <span className="font-bold text-[#49BBBD]">{course.newPrice}</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-semibold text-gray-800 mb-2">Course Materials</p>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>sed do eiusmod tempor adipiscing elit</span>
                    <span className="font-bold text-[#49BBBD]">$0.00</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Coupon Discount</span>
                  <span className="text-green-600 font-bold">{discount}%</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">TAX</span>
                  <span className="font-bold">{taxRate}%</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-[#2F327D]">Total</span>
                    <span className="font-bold text-[#49BBBD]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Course Summary */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold mb-4 text-[#49BBBD]">You're getting:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <i className="fa fa-check-circle text-[#49BBBD] mr-2"></i>
                    <span>Full lifetime access to {course.name}</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa fa-check-circle text-[#49BBBD] mr-2"></i>
                    <span>{course.lectures} hours of video content</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa fa-check-circle text-[#49BBBD] mr-2"></i>
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa fa-check-circle text-[#49BBBD] mr-2"></i>
                    <span>Access on mobile and TV</span>
                  </li>
                </ul>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-6 p-4 bg-[#f0f9ff] rounded-lg text-center">
                <i className="fa fa-shield-alt text-[#49BBBD] text-2xl mb-2"></i>
                <p className="font-bold text-[#2F327D]">30-Day Money-Back Guarantee</p>
                <p className="text-sm text-gray-600 mt-1">Full refund if you're not satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;