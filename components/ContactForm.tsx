import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";


interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Initial state
      if (overlayRef.current) {
        overlayRef.current.style.opacity = '0';
      }
      if (modalRef.current) {
        modalRef.current.style.transform = 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
      }
      if (closeRef.current) {
        closeRef.current.style.transform = 'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
      }
      if (textWrapperRef.current) {
        textWrapperRef.current.style.transform = 'translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        textWrapperRef.current.style.opacity = '0';
      }
      if (formWrapperRef.current) {
        formWrapperRef.current.style.transform = 'translate3d(0px, 2%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        formWrapperRef.current.style.opacity = '0';
      }

      // Animate in with delays
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.opacity = '1';
        }
        if (modalRef.current) {
          modalRef.current.style.transform = 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
      }, 10);

      setTimeout(() => {
        if (closeRef.current) {
          closeRef.current.style.transform = 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
      }, 200);

      setTimeout(() => {
        if (textWrapperRef.current) {
          textWrapperRef.current.style.transform = 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
          textWrapperRef.current.style.opacity = '1';
        }
      }, 400);

      setTimeout(() => {
        if (formWrapperRef.current) {
          formWrapperRef.current.style.transform = 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
          formWrapperRef.current.style.opacity = '1';
        }
      }, 600);
    } else {
      document.body.style.overflow = '';

      // Animate out
      if (formWrapperRef.current) {
        formWrapperRef.current.style.transform = 'translate3d(0px, 2%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        formWrapperRef.current.style.opacity = '0';
      }

      setTimeout(() => {
        if (textWrapperRef.current) {
          textWrapperRef.current.style.transform = 'translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
          textWrapperRef.current.style.opacity = '0';
        }
      }, 100);

      setTimeout(() => {
        if (closeRef.current) {
          closeRef.current.style.transform = 'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
      }, 200);

      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.style.transform = 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
        if (overlayRef.current) {
          overlayRef.current.style.opacity = '0';
        }
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        window.dispatchEvent(new CustomEvent('contactFormClose'));
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectDetails: '',
          message: ''
        });
      }, 3000);
    } catch {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" style={{ display: isOpen ? 'block' : 'none' }}>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
        style={{ opacity: '0' }}
        onClick={() => {
          onClose();
          window.dispatchEvent(new CustomEvent('contactFormClose'));
        }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="modal--bg absolute right-0 top-0 h-full w-full max-w-3xl bg-card"
        style={{
          transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'auto'
        }}
        data-lenis-scroll-allowed=""
      >
        <div className="modal-items flex flex-col h-full">
          {/* Close Button */}
          <div className="modal-close-wrapper absolute top-6 right-6 z-50">
            <div
              ref={closeRef}
              className="modal-close-link cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              style={{
                transform: 'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('contactFormClose'));
              }}
            >
              Close
            </div>
          </div>

          {/* Modal Text */}
          <div
            ref={textWrapperRef}
            className="modal-text-wrapper px-12 pt-16 pb-8"
            style={{
              transform: 'translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: '0',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Request a project
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tell me briefly about your project! Simply fill out the form or send me an{" "}
              <a
                href="mailto:hello@thetatech.com?subject=Hi"
                className="text-accent hover:text-accent/80 transition-colors duration-300 underline"
              >
                email
              </a>
              {" "}– I'll get back to you.
            </p>
          </div>

          {/* Form */}
          <div
            ref={formWrapperRef}
            className="modal-form flex-1 px-12 pb-12"
            style={{
              transform: 'translate3d(0px, 2%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: '0',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="w-form">
              <form
                onSubmit={handleSubmit}
                className="form space-y-6"
                style={{ display: showSuccess || showError ? 'none' : 'block' }}
              >
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field-wrapper form-field-half">
                    <label htmlFor="Name" className="field-label-2 block text-sm font-medium text-foreground mb-2">
                      name
                    </label>
                    <input
                      className="text-field w-input w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                      maxLength={256}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="first name Last Name"
                      type="text"
                      id="Name"
                      required
                    />
                  </div>
                  <div className="form-field-wrapper form-field-half">
                    <label htmlFor="Company" className="field-label-2 block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      className="text-field w-input w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                      maxLength={256}
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      type="text"
                      id="Company"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field-wrapper form-field-half">
                    <label htmlFor="Email" className="field-label-2 block text-sm font-medium text-foreground mb-2">
                      e-mail
                    </label>
                    <input
                      className="text-field w-input w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                      maxLength={256}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      type="email"
                      id="Email"
                      required
                    />
                  </div>
                  <div className="form-field-wrapper form-field-half">
                    <label htmlFor="Phone" className="field-label-2 block text-sm font-medium text-foreground mb-2">
                      phone
                    </label>
                    <input
                      className="text-field w-input w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                      maxLength={256}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      type="tel"
                      id="Phone"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-field-wrapper form-field-full">
                  <label htmlFor="ProjectDetails" className="field-label-2 block text-sm font-medium text-foreground mb-2">
                    Project details
                  </label>
                  <textarea
                    id="ProjectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    maxLength={5000}
                    placeholder="Briefly describe your project"
                    className="textarea w-input w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                    rows={4}
                    required
                  />
                </div>

                {/* Additional Message */}
                <div className="form-field-wrapper form-field-full">
                  <label htmlFor="Message" className="field-label-2 block text-sm font-medium text-foreground mb-2">
                    News
                  </label>
                  <textarea
                    id="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={5000}
                    placeholder="Do you have any further information?"
                    className="textarea w-input w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button w-button w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <div
                  className="success-message w-form-done text-center py-16"
                  role="region"
                  aria-label="Email Form success"
                >
                  <div className="text-block">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thank you for your message!
                    </h3>
                    <p className="text-muted-foreground">
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {showError && (
                <div
                  className="error-message w-form-fail text-center py-16"
                  role="region"
                  aria-label="Email form failure"
                >
                  <div>
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Oops, something went wrong!
                    </h3>
                    <p className="text-muted-foreground">
                      Please try again or send us an email directly.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}