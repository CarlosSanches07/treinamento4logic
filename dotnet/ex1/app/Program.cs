using Models;
using System;

namespace app {

    class Program {

    		public static Project BusinessProject = Project.GetProject();

        static void Main(string[] args) {
        	Console.WriteLine("Projeto:");
        	BusinessProject.Print();
        	Console.ReadKey();
        	Console.Clear();
        	BusinessProject.MarkFinished();
        	Console.WriteLine("Projeto finalizado:");
        	BusinessProject.Print();
        	Console.ReadKey();
        	Console.Clear();
        	BusinessProject.SetRemoved();
        	Console.WriteLine("Projeto Removido");
        	BusinessProject.Print();
        	Console.ReadKey();
        	Console.Clear();
        	Console.WriteLine("Fim");
        }

        public void PrintProject() {
        	BusinessProject.Print();
        }

        public Boolean FinishProject() {
        	Boolean test;
        	test = BusinessProject.MarkFinished();
        	return test;
        }

        public Boolean RemoveProject() {
        	BusinessProject.SetRemoved();
        	return true;
        }

    }

}
