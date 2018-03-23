using Models;
using System;

namespace app {

    class Program {

    	public Project[] ProjectList = new Project[10];
        public Task[] TaskList = new Task[10];
        public Person[] PersonList = new Person[10];

        static void Main(string[] args) {
            
        }

/*        public void PrintProject() {
        	BusinessProject.Print();
        }*/

        // public Boolean FinishProject() {
        // 	Boolean test;
        // 	test = BusinessProject.MarkFinished();
        // 	return test;
        // }

        // public Boolean RemoveProject() {
        // 	BusinessProject.SetRemoved();
        // 	return true;
        // }
        public static void MainMenu() {
            
        }

        /*Views*/

        public static String MainScreen() {
            String screen = "_____________ Project Manager ____________"
                          + "\n\nPlease select one of the following Modules:"
                          + "\n\t 1. User Module"
                          + "\n\t 2. Task Module"
                          + "\n\t 3. Project Module"
                          + "\n\t 0. Exit";
            return screen;
        }

        public static String UserModuleScreen() {
            String screen = "_____________ User Module ____________"
                          + "\n\nPlease select one of the following options:"
                          + "\n\t 1. Create User"
                          + "\n\t 2. List Users"
                          + "\n\t 3. Update User"
                          + "\n\t 4. Delete User"
                          + "\n\t 0. Exit";
            return screen;
        }

        public static String TaskModuleScreen() {
            String screen = "_____________ Task Module ____________"
                          + "\n\nPlease select one of the following options:"
                          + "\n\t 1. Create Task"
                          + "\n\t 2. List Tasks"
                          + "\n\t 3. Update Task"
                          + "\n\t 4. Delete Task"
                          + "\n\t 0. Exit";
            return screen;
        }

        public static String ProjectModuleScreen() {
            String screen = "_____________ Project Module ____________"
                          + "\n\nPlease select one of the following options:"
                          + "\n\t 1. Create Project"
                          + "\n\t 2. List Projects"
                          + "\n\t 3. Update Project"
                          + "\n\t 4. Delete Project"
                          + "\n\t 0. Exit";
            return screen;
        }

        /*Controllers*/

        public static Project CreateProject (Person[] persons) {
            Console.WriteLine("____________ Create Project ____________");
            Console.WriteLine("\n\n Please Name your project: ");
            String title = Console.ReadLine();
            Console.WriteLine("\n Give me a little description about your prject: ");
            String comments = Console.ReadLine();
            Console.WriteLine("\n\n What is your project code ?: ");
            String code = Console.ReadLine();
            DateTime start = DateTime.Now;
            Console.WriteLine("\n\n Tell me, which is the estimated finish date ?(ex: yyyy-mm-dd): ");
            DateTime estimated = DateTime.Parse(Console.ReadLine());
            Console.WriteLine("\n\nPlease select a user to be responsible for this project(type his id): ");
            Program.ListPersons(persons);
            Int32 responsible = Int32.Parse(Console.ReadLine());
            Person p = new Person();
            for (var i = 0;i < persons.Length; i++){
                if(persons[i].Id == responsible){
                    p = persons[i];
                }
            }
            var id = 1;
            return Project.GetProject(id, title, comments, code, start, estimated, p); 
        }

        public static void ListProjects(Project[] proj){
            Console.WriteLine("Project List: ");
            for(var i = 0; i < proj.Length; i++){
                Console.WriteLine("\n\tId: {0}\tTitle: {1}", proj[i].Id, proj[i].Title);
            }
        }

        public static void UpdateProject(Project[] proj) {
            Console.WriteLine("____________ Update Project ____________");
            Program.ListProjects(proj);
            Console.WriteLine("\n\nPlase type the project id that you want to update: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = 0;
            for (var i = 0; i < proj.Length; i++) {
                if(proj[i].Id == Id)
                    index = i;
            }
            Console.Clear();
            Console.WriteLine("Project Selected : \n\n");
            proj[index].Print();
            Console.WriteLine("\n\nChoose which field you want to update :");
            Console.WriteLine("\n\t1. Title");
            Console.WriteLine("\n\t2. Description");
            Int32 selected = Int32.Parse(Console.ReadLine());
            switch(selected){
                case 1 : 
                    Console.WriteLine("\n\nType the new title");
                    proj[index].Title = Console.ReadLine();
                    break;
                case 2 : 
                    Console.WriteLine("\n\nType the new description");
                    proj[index].Comments = Console.ReadLine();
                    break;
                default :
                    Console.WriteLine("Invalid Option");
                    Console.ReadLine();
                    break;
            }
        }

        public static void DeleteProject(Project[] proj) {
             Console.WriteLine("____________ Delete Project ____________");
            Program.ListProjects(proj);
            Console.WriteLine("\n\nPlase type the project id that you want to delete: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = 0;
            for (var i = 0; i < proj.Length; i++) {
                if(proj[i].Id == Id)
                    index = i;
            }
            Console.Clear();
            Console.WriteLine("Project Selected : \n\n");
            proj[index].Print();
            Console.WriteLine("\n\nDo you really want to delete it ?:");
            Console.WriteLine("\n\t1. Yes");
            Console.WriteLine("\n\t2. No");
            Int32 selected = Int32.Parse(Console.ReadLine());
            switch(selected){
                case 1 : 
                    Console.WriteLine("\n\nProject Deleted");
                    proj[index].SetRemoved();
                    break;
                case 2 : 
                    Console.WriteLine("\n\nOperation canceled");
                    break;
                default :
                    Console.WriteLine("Invalid Option");
                    Console.ReadLine();
                    break;
            }
        }

        public static Person CreatePerson () {
            Console.WriteLine("____________ Create User ____________");
            Console.WriteLine("\n\n What is the User name ?: ");
            String title = Console.ReadLine();
            Console.WriteLine("\n\n Give me a little description about this User: ");
            String comments = Console.ReadLine();
            Console.WriteLine("\n\n What is your birth date ?: ");
            DateTime birth = DateTime.Parse(Console.ReadLine());
            Console.WriteLine("\n\n What is the User email ?:");
            String email = Console.ReadLine();
            var id = 1;
            return Person.getPerson(id, title, comments, birth, null, email); 
        }

        public static void ListPersons(Person[] persons) {
            Console.WriteLine("Users List: ");
            for(var i = 0; i < persons.Length; i++){
                Console.WriteLine("\n\tId: {0}\tTitle: {1}", persons[i].Id, persons[i].Title);
            }
        }

        public static void UpdatePerson(Person[] persons) {
            Console.WriteLine("____________ Update User ____________");
            Program.ListPersons(persons);
            Console.WriteLine("\n\nPlase type the user id that you want to update: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = 0;
            for (var i = 0; i < persons.Length; i++) {
                if(persons[i].Id == Id)
                    index = i;
            }
            Console.Clear();
            Console.WriteLine("User Selected : \n\n");
            persons[index].Print();
            Console.WriteLine("\n\nChoose which field you want to update :");
            Console.WriteLine("\n\t1. Name");
            Console.WriteLine("\n\t2. Description");
            Int32 selected = Int32.Parse(Console.ReadLine());
            switch(selected){
                case 1 : 
                    Console.WriteLine("\n\nType the new name");
                    persons[index].Title = Console.ReadLine();
                    break;
                case 2 :    
                    Console.WriteLine("\n\nType the new description");
                    persons[index].Comments = Console.ReadLine();
                    break;
                default :
                    Console.WriteLine("Invalid Option");
                    Console.ReadLine();
                    break;
            }
        }

        public static void DeletePerson(Person[] persons) {
            Console.WriteLine("____________ Delete User ____________");
            Program.ListPersons(persons);
            Console.WriteLine("\n\nPlase type the user id that you want to delete: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = 0;
            for (var i = 0; i < persons.Length; i++) {
                if(persons[i].Id == Id)
                    index = i;
            }
            Console.Clear();
            Console.WriteLine("User Selected : \n\n");
            persons[index].Print();
            Console.WriteLine("\n\nDo you really want to delete it ?:");
            Console.WriteLine("\n\t1. Yes");
            Console.WriteLine("\n\t2. No");
            Int32 selected = Int32.Parse(Console.ReadLine());
            switch(selected){
                case 1 : 
                    Console.WriteLine("\n\nUser Removed");
                    persons[index].SetRemoved();
                    break;
                case 2 : 
                    Console.WriteLine("\n\nOperation canceled");
                    break;
                default :
                    Console.WriteLine("Invalid Option");
                    Console.ReadLine();
                    break;
            }
        }

        public static Task CreateTask(Person[] persons){
            Console.WriteLine("____________ Create Task ____________");
            Console.WriteLine("\n\n What is the Task name ?: ");
            String title = Console.ReadLine();
            Console.WriteLine("\n\n Give me a little description about this Task: ");
            String comments = Console.ReadLine();
            Console.WriteLine("\n\nPlease select a user to be responsible for this task(type his id): ");
            Program.ListPersons(persons);
            Int32 responsible = Int32.Parse(Console.ReadLine());
            Person p = new Person();
            for (var i = 0;i < persons.Length; i++){
                if(persons[i].Id == responsible){
                    p = persons[i];
                }
            }
            Console.WriteLine("\n\nWhat is the workload of this task ?: ");
            float workload = float.Parse(Console.ReadLine());
            var id = 1;
            Console.WriteLine("\nWhat is the task type ?:");
            Console.WriteLine("\n\t1. Code");
            Console.WriteLine("\n\t2. Test case");
            Console.WriteLine("\n\t3. Bug\n");
            var type = Int32.Parse(Console.ReadLine()) -1;
            return Task.getTask(id, title, comments, p, workload, ETaskType);
        }

    }

}
