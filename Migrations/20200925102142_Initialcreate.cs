using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace reactappdemo.Migrations
{
    public partial class Initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Service = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Message = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Email", "Message", "Name", "Service" },
                values: new object[] { 1, null, "Web Design", "shirt", null });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Email", "Message", "Name", "Service" },
                values: new object[] { 2, null, "Web Development", "tshirt", null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");
        }
    }
}
