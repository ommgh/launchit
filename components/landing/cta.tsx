"use client";
import { useState } from "react";
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
import { toast } from "sonner";

const formSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a package"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  details: z.string().optional(),
});

export default function CTA() {
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
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className=" py-16 md:py-24 tracking-widest"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
        <h2 className=" flex text-6xl md:text-8xl font-medium mb-16 md:mb-24 lg:items-center lg:justify-center">
          Let&apos;s
          <br />
          collaborate
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl">
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

            <FormField
              control={form.control}
              name="budget"
              render={() => (
                <FormItem className="mb-12">
                  <label className="block text-xl mb-4">Package</label>
                  <div className="flex flex-wrap gap-3">
                    {["MVP Development Package", "Growth Retainer Package"].map(
                      (budget) => (
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
                      )
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        className="bg-transparent border-b border-b-foreground rounded-none text-white placeholder-foreground focus:outline-none focus:border-white transition-colors"
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
                        className="bg-transparent border-b border-b-foreground rounded-none text-white placeholder-foreground focus:outline-none focus:border-white transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className="mb-12">
                  <FormControl>
                    <Textarea
                      placeholder="Project details (optional)"
                      className="w-full bg-transparent border-b border-b-foreground rounded-none text-white placeholder-foreground focus:outline-none focus:border-none transition-colors resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="text-xl bg-orange-500 text-white hover:bg-orange-600"
              >
                {isSubmitting ? "submitting..." : "submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
