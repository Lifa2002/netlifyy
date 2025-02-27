"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast.success("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div id="contact" className="py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Have a project in mind? Let's discuss how I can help bring your vision to life.
                        </p>
                    </div>
                </div>
                <!-- rest of your code -->
            </div>
        </div>
    );
}
