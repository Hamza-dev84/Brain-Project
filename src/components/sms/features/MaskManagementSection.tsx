import { Link } from '@tanstack/react-router';
import FeatureSection from "./FeatureSection";
import { ShieldPlus, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MaskManagementSection = () => {
  const masks = [
    { id: "ALPHASTORE", status: "Active", statusColor: "green" },
    { id: "BETABRAND", status: "Pending PTA Approval", statusColor: "yellow" },
    { id: "MYSHOP", status: "Active", statusColor: "green" },
    { id: "NEWSTORE", status: "Rejected", statusColor: "red" },
  ];

  return (
    <FeatureSection
      title="Mask Management – Control Your Brand Identity"
      description="Manage sender IDs (masks) for professional, branded communication"
      variant="highlighted"
    >
      <div>
        <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border/50 shadow-elegant">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl rounded-full" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center">
                  <ShieldPlus className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary font-raleway">
                  Sender ID Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Manage all your approved sender IDs in one place
                </p>
              </div>
            </div>
            <Button className="gap-2" asChild>
              <Link to="/services/sms/contact">
                <Plus className="w-4 h-4" />
                Request New Sender ID
              </Link>
            </Button>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border/30">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-semibold text-sm text-muted-foreground">
                    Sender ID (Mask)
                  </th>
                  <th className="text-left p-4 font-semibold text-sm text-muted-foreground">
                    Status
                  </th>
                  <th className="text-right p-4 font-semibold text-sm text-muted-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {masks.map((mask, i) => (
                  <tr
                    key={i}
                    className="border-t border-border/20 hover:bg-primary/5 transition-colors"
                  >
                    <td className="p-4">
                      <span className="font-mono font-semibold text-primary">{mask.id}</span>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={
                          mask.statusColor === "green"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : mask.statusColor === "yellow"
                              ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                              : "bg-red-500/10 text-red-600 border-red-500/20"
                        }
                      >
                        {mask.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        {mask.status === "Active" ? (
                          <>
                            <Button variant="ghost" size="sm" className="gap-2" disabled tabIndex={-1} aria-hidden="true">
                              <Edit className="w-4 h-4" />
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-2 text-destructive hover:text-destructive"
                             disabled tabIndex={-1} aria-hidden="true">
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </Button>
                          </>
                        ) : mask.status === "Rejected" ? (
                          <Button variant="outlined" size="sm" className="gap-2" disabled tabIndex={-1} aria-hidden="true">
                            <Plus className="w-4 h-4" />
                            Resubmit
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" className="gap-2" disabled tabIndex={-1} aria-hidden="true">
                            <Eye className="w-4 h-4" />
                            View Details
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Request New Sender IDs</h4>
                  <p className="text-sm text-muted-foreground">
                    Submit new sender ID requests directly through the portal. Our team will handle
                    PTA approval workflow for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <ShieldPlus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">PTA Approved Aliases</h4>
                  <p className="text-sm text-muted-foreground">
                    All sender IDs are registered with Pakistan Telecommunication Authority for
                    legitimate business communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
};

export default MaskManagementSection;
