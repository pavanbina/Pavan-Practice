namespace MOSH.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateNametoMembershipType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MembershipTypes", "MemberShipName", c => c.String());
            DropColumn("dbo.MembershipTypes", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.MembershipTypes", "Name", c => c.String());
            DropColumn("dbo.MembershipTypes", "MemberShipName");
        }
    }
}
