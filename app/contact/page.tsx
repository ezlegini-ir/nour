import ContactForm from "@/components/forms/ContactForm";

const ContactPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-muted-foreground">
        Have a question or inquiry? Send us a message and we will get back to
        you soon.
      </p>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
