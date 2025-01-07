import { Mail, User, Link, Settings, CreditCard, Share2, LogOut } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  // This would typically come from your auth context/state
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    referralCode: "JOHN123",
    referredBy: "MARY456",
    credits: 500,
    avatarUrl: "https://github.com/shadcn.png"
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-dashboard-neutral-400">{user.email}</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <Settings className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Account Information */}
        <Card className="border-dashboard-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-dashboard-teal-DEFAULT" />
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-dashboard-neutral-400">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-dashboard-teal-DEFAULT" />
                <span>{user.email}</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-dashboard-neutral-400">Available Credits</label>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-dashboard-teal-DEFAULT" />
                <span>{user.credits} credits</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral Information */}
        <Card className="border-dashboard-neutral-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-dashboard-teal-DEFAULT" />
              Referral Program
            </CardTitle>
            <CardDescription>Share your code and earn rewards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-dashboard-neutral-400">Your Referral Code</label>
              <div className="flex items-center gap-2 bg-dashboard-neutral-100 p-3 rounded-md">
                <Link className="h-4 w-4 text-dashboard-teal-DEFAULT" />
                <code className="font-mono">{user.referralCode}</code>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Copy
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-dashboard-neutral-400">Referred By</label>
              <div className="flex items-center gap-2">
                <Link className="h-4 w-4 text-dashboard-teal-DEFAULT" />
                <code className="font-mono">{user.referredBy}</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Button variant="outline" className="w-full justify-start gap-2">
            <CreditCard className="h-4 w-4 text-dashboard-teal-DEFAULT" />
            Buy More Credits
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4 text-dashboard-teal-DEFAULT" />
            Account Settings
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2 text-red-600 hover:text-red-700">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;