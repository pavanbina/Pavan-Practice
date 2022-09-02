using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pavan.Views.Aspx
{
    public partial class DynamicMenu : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static List<Menu> GetParentMenu()
        {
            List<Menu> menus = GetMenus(0);
            return menus;
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static List<Menu> GetChildMenu(int parent)
        {
            List<Menu> menus = GetMenus(parent);
            foreach (Menu menu in menus)
            {
                menu.List = GetMenus(menu.Id);
            }

            return menus;
        }

        public static List<Menu> GetMenus(int parent)
        {
            List<Menu> menus = new List<Menu>();
            DataRow[] drs = GetData().Select("ParentId=" + parent);
            foreach (DataRow dr in drs)
            {
                Menu menu = new Menu();
                menu.Id = Convert.ToInt32(dr["Id"]);
                menu.MenuText = dr["MenuText"].ToString();
                menu.ParentId = Convert.ToInt32(dr["ParentId"]);
                menu.Active = Convert.ToBoolean(dr["Active"]);
                menus.Add(menu);
            }

            return menus;
        }

        public static DataTable GetData()
        {
            DataTable dt = new DataTable();
            dt.Columns.AddRange(new DataColumn[4] {
            new DataColumn("Id",typeof(int)),
            new DataColumn("MenuText",typeof(string)),
            new DataColumn("ParentId",typeof(int)),
            new DataColumn("Active",typeof(bool)) });
            dt.Rows.Add(1, "USA", 0, 1);
            dt.Rows.Add(2, "India", 0, 1);
            dt.Rows.Add(3, "Australia", 0, 1);
            dt.Rows.Add(5, "Virginia", 1, 1);
            dt.Rows.Add(6, "Maryland", 1, 1);
            dt.Rows.Add(7, "AP", 2, 1);
            dt.Rows.Add(8, "MP", 2, 1);
            dt.Rows.Add(9, "Karnataka", 2, 1);
            dt.Rows.Add(10, "Bangalore", 9, 1);
            dt.Rows.Add(11, "Mangalore", 9, 1);
            dt.Rows.Add(12, "Mysore", 9, 0);

            return dt;
        }

        public class Menu
        {
            public int Id { get; set; }
            public string MenuText { get; set; }
            public int ParentId { get; set; }
            public bool Active { get; set; }
            public List<Menu> List { get; set; }
        }
    }
}