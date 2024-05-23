import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "src/app/components/Footer/Footer.jsx";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
    test("renders the Footer component with menu items and social icons", () => {
      render(<Footer />);

      const linkedinIcon = screen.getByLabelText("Visit our LinkedIn");
      expect(linkedinIcon).toBeInTheDocument();

      const instaIcon = screen.getByLabelText("Visit our Instagram");
        expect(instaIcon).toBeInTheDocument();

        const xIcon = screen.getByLabelText("Visit our Twitter");
        expect(xIcon).toBeInTheDocument();

        const facebookIcon = screen.getByLabelText("Visit our Facebook");
        expect(facebookIcon).toBeInTheDocument();

        const contactLink = screen.getByText("Contact Us");
        expect(contactLink).toBeInTheDocument();

        const privacyLink = screen.getByText("Privacy Policy");
        expect(privacyLink).toBeInTheDocument();
    })

    test("test that the social icons are correctly linked", () => {
        render(<Footer />);

        const linkedinIcon = screen.getByRole("link",{name: /Visit our LinkedIn/i});
        fireEvent.click(linkedinIcon);
        expect(linkedinIcon).toHaveAttribute("href", "https://www.linkedin.com/company/birmingham-business/");

        const instaIcon = screen.getByRole("link",{name: /Visit our Instagram/i});
        fireEvent.click(instaIcon);
        expect(instaIcon).toHaveAttribute("href", "https://www.instagram.com/birminghambiz/");

        const xIcon = screen.getByRole("link",{name: /Visit our Twitter/i});
        fireEvent.click(xIcon);
        expect(xIcon).toHaveAttribute("href", "https://twitter.com/brumbiz");

        const facebookIcon = screen.getByRole("link",{name: /Visit our Facebook/i});
        fireEvent.click(facebookIcon);
        expect(facebookIcon).toHaveAttribute("href", "https://www.facebook.com/brumbiz");

        const contactLink = screen.getByText("Contact Us");
        fireEvent.click(contactLink);
        expect(contactLink).toHaveAttribute("href", "/contact");
    })
})

