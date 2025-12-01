"use client";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { toast } from "sonner";

const formSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a package"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  details: z.string().optional(),
});

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      budget: "",
      name: "",
      email: "",
      details: "",
    },
  });

  const handleServiceToggle = (service: string) => {
    const currentServices = form.getValues("services");
    const newServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];
    form.setValue("services", newServices);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Form submitted successfully!");

      form.reset();
    } catch (error) {
      toast.error("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className=" flex h-full lg:h-screen items-center justify-center py-12 md:py-24 tracking-widest "
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-6xl md:text-8xl font-medium mb-16 md:mb-24 text-center">
            Got an <span className="text-orange-500">Idea</span> <br />
            Let&apos;s Discuss
          </h2>
          <div className="p-6 rounded-lg text-center mb-10">
            <Link
              prefetch
              href="https://cal.com/launchitoday/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <Calendar size={20} />
              Book a free 15-minute call
            </Link>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl">
            {/* Service Selection */}
            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem className="mb-12">
                  <label className="block text-xl mb-4">Service</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "UI/UX Design",
                      "Web Development",
                      "Mobile App Development",
                    ].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-6 py-3 rounded-lg text-sm transition-colors ${
                          form.getValues("services").includes(service)
                            ? "bg-orange-500 text-white"
                            : "bg-white text-black hover:bg-orange-20"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Budget Selection */}
            <FormField
              control={form.control}
              name="budget"
              render={() => (
                <FormItem className="mb-12">
                  <label className="block text-xl mb-4">Package</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "MVP Development Package",
                      "Startup Booster Package",
                      "Growth Retainer Package",
                    ].map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => form.setValue("budget", budget)}
                        className={`px-6 py-3 rounded-lg text-sm transition-colors ${
                          form.getValues("budget") === budget
                            ? "bg-orange-500 text-white"
                            : "bg-white text-black hover:bg-orange-20"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        className="bg-transparent border-b border-zinc-800 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        className="bg-transparent border-b border-zinc-800 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Details */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className="mb-12">
                  <FormControl>
                    <Textarea
                      placeholder="Project etails"
                      className="w-full bg-transparent border-b border-zinc-800 rounded-none text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="text-xl bg-orange-500 hover:bg-orange-500 transition-colors text-white"
              >
                {isSubmitting ? "submitting..." : "submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
