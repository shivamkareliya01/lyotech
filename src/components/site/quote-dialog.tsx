import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { LYO_MODELS } from "@/lib/lyo-data";

export function QuoteDialog({
  open,
  onOpenChange,
  defaultModel,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  defaultModel?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [model, setModel] = useState(defaultModel ?? "");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast.success("Quote request received", {
        description: "Our team will get back to you shortly.",
      });
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Tell us about your project and we'll respond within 1 business day.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="q-name">Name *</Label>
              <Input id="q-name" required maxLength={100} />
            </div>
            <div>
              <Label htmlFor="q-company">Company</Label>
              <Input id="q-company" maxLength={100} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="q-email">Email *</Label>
              <Input id="q-email" type="email" required maxLength={150} />
            </div>
            <div>
              <Label htmlFor="q-phone">Phone</Label>
              <Input id="q-phone" type="tel" maxLength={30} />
            </div>
          </div>
          <div>
            <Label>Model interested in</Label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                {LYO_MODELS.map((m) => (
                  <SelectItem key={m.model} value={m.model}>
                    {m.model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="q-msg">Message</Label>
            <Textarea id="q-msg" rows={3} maxLength={1000} />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
          >
            {submitting ? "Sending..." : "Send Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
