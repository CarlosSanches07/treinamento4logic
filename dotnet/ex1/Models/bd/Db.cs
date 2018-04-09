using System;
using System.Data;
using System.Data.SqlClient;

namespace Utils
{
    public class Db
    {
        public SqlConnection Connection;
        public String Url;

        public Db ( String url ) 
        {
            Url = url;
        }

        public void Connect ()
        {
            if (Connection != null)
            {
                Console.WriteLine("Already Connected");
            } 
            else 
            {
                try
                {                    
                    Connection = new SqlConnection(Url);
                    Connection.Open();
                }
                catch (System.Exception)
                {
                    Console.WriteLine("Connection error, check if your connection string is valid");
                }
            }
        }

        public void Disconnect () {
            if(Connection == null)
            {
                Console.WriteLine("There is no Connections");
            }
            else
            {
                try
                {
                    Connection.Close();
                    Connection.Dispose();
                    Connection = null;
                }
                catch (System.Exception)
                {
                    
                    Console.WriteLine("Try to terminate all your transitions before disconnect");
                }
            }
        }
    }
}