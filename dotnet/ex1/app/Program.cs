using Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace app {

    class Program {

    	public static List<Project> ProjectList = new List<Project>();
        public static List<Task> TaskList = new List<Task>();
        public static List<Person> PersonList = new List<Person>();

        static void Main(string[] args) {
            Int32 a = 5;
            Int32 b;
            while(a != 0){
                Console.WriteLine(Program.MainScreen());
                try {
                    a = Int32.Parse(Console.ReadLine());
                }
                catch(FormatException  e) {
                    Console.WriteLine("Please, insert a valid option.");
                    Console.ReadLine();
                }
                
                Console.Clear();
                switch (a) {
                    case 1:
                        b = 5;
                        while (b != 0) {
                            Console.WriteLine(Program.UserModuleScreen());
                            try{
                                b = Int32.Parse(Console.ReadLine());
                            }
                            catch(FormatException e) {
                                Console.WriteLine("Please, insert a valid option.");
                                Console.ReadLine();
                            }
                            Console.Clear();
                            switch (b) {
                                case 1:
                                    PersonList.Add(Program.CreatePerson());
                                    break;
                                case 2:
                                    ListPersons(PersonList);
                                    break;
                                case 3:
                                    UpdatePerson(PersonList);
                                    break;
                                case 4:
                                    DeletePerson(PersonList);
                                    break;
                                default:
                                  Console.WriteLine("Invalid Option");
                                  break;
                            }
                        }
                        break;
                    case 2:
                        b = 5;
                        while (b != 0) {
                            Console.WriteLine(Program.TaskModuleScreen());
                            try{
                                b = Int32.Parse(Console.ReadLine());
                            }
                            catch(FormatException e) {
                                Console.WriteLine("Please, insert a valid option.");
                                Console.ReadLine();
                            }
                            Console.Clear();
                            switch (b) {
                                case 1:
                                    TaskList.Add(Program.CreateTask());
                                    break;
                                case 2:
                                    ListTasks(TaskList);
                                    break;
                                case 3:
                                    UpdateTask(TaskList);
                                    break;
                                case 4:
                                    DeleteTask(TaskList);
                                    break;
                                default:
                                  Console.WriteLine("Invalid Option");
                                  break;
                            }
                        }
                        break;
                    case 3:
                        b = 5;
                        while (b != 0) {
                            Console.WriteLine(Program.ProjectModuleScreen());
                            try{
                                b = Int32.Parse(Console.ReadLine());
                            }
                            catch(FormatException e) {
                                Console.WriteLine("Please, insert a valid option.");
                                Console.ReadLine();
                            }
                            Console.Clear();
                            switch (b) {
                                case 1:
                                    ProjectList.Add(Program.CreateProject(PersonList));
                                    break;
                                case 2:
                                    ListProjects(ProjectList);
                                    break;
                                case 3:
                                    UpdateProject(ProjectList);
                                    break;
                                case 4:
                                    DeleteProject(ProjectList);
                                    break;
                                default:
                                  Console.WriteLine("Invalid Option");
                                  break;
                            }
                        }
                        break;
                    default:
                        Console.WriteLine("Invalid Option !!!");
                        break;
                }
            }
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

        /*Projects*/

        public static Project CreateProject (List<Person> persons) {
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
            var index = persons.FindIndex( item => item.Id == responsible );
            if(index == -1){
                Console.WriteLine("\n\tSorry this Id does not match"); 
            }else {
                p = persons[index];
            }
            Console.WriteLine("\n\nPlease insert users that will be part of this project team: \n\t");
            Program.ListPersons(persons);
            Console.WriteLine("type the user id, or 0 to exit team selection");
            Int32 i = 1777;
            List<Person> team = new List<Person>();
            while(i != 0){
                i = Int32.Parse(Console.ReadLine());
                if(i != 0){
                    Person u = null;
                    var ind = persons.FindIndex( item => item.Id == i );
                    if(ind == -1){
                        Console.WriteLine("\n\tSorry this Id does not match"); 
                    }else {
                        u = persons[ind];
                        team.Add(u);
                    }
                }
            }
            Dictionary<Person, List<Task>> taskList = null;
            var id = Program.GenId(Program.ProjectList);
            Console.WriteLine("Do you want to add some tasks to your project ?: ");
            Console.WriteLine("\n\t1. Yes\n\t2. No");
            Int32 AddTaks = Int32.Parse(Console.ReadLine());
            List<Task> tasks = new List<Task>();
            switch(AddTaks) {
                case 1:
                    if(TaskList == null) {
                        Console.WriteLine("\n\nPlease create some tasks");
                    } else {
                        Program.ListTasks(Program.TaskList);
                        Console.WriteLine("Type the Task Id that you want to add, or 0 to exit");
                        i = 788;
                        while ( i != 0 ) {
                            i = Int32.Parse(Console.ReadLine());
                            var ind = Program.TaskList.FindIndex(item => item.Id == i);
                            tasks.Add(Program.TaskList[ind]);
                        }
                        Person resp = null;
                        Console.WriteLine("Who is the responsible for these tasks ?: ");
                        Program.ListPersons(Program.PersonList);
                        Int32 personId = Int32.Parse(Console.ReadLine());
                        var inde = Program.PersonList.FindIndex(item => item.Id == personId);
                        resp = Program.PersonList[inde];
                        taskList = new Dictionary<Person, List<Task>>();
                        taskList.Add(resp, tasks);
                    }
                    break;
                case 2: 
                    break;
                default:
                    break;               
            }

            return Project.GetProject(id, title, comments, code, start, estimated, taskList, team, p); 
        }

        public static void ListProjects(List<Project> proj){
            if(proj[0] == null){
                Console.WriteLine("Empty List");
                return;
            }
            Console.WriteLine("Project List: ");
            proj.ForEach(item => Console.WriteLine("\n\tId: {0}\tTitle: {1}", item.Id, item.Title));
        }

        public static void UpdateProject(List<Project> proj) {
            Console.WriteLine("____________ Update Project ____________");
            Program.ListProjects(proj);
            Console.WriteLine("\n\nPlase type the project id that you want to update: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = proj.FindIndex(item => item.Id == Id);
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

        public static void DeleteProject(List<Project> proj) {
             Console.WriteLine("____________ Delete Project ____________");
            Program.ListProjects(proj);
            Console.WriteLine("\n\nPlase type the project id that you want to delete: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = proj.FindIndex(item => item.Id == Id);
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

        /*Person*/

        public static Person CreatePerson () {
            Console.WriteLine("____________ Create User ____________");
            Console.WriteLine("\n\n What is the User name ?: ");
            String title = Console.ReadLine();
            Console.WriteLine("\n\n Give me a little description about this User: ");
            String comments = Console.ReadLine();
            Console.WriteLine("\n\n What is your birth date ?: ");
            DateTime birth;
            try {
                birth = DateTime.Parse(Console.ReadLine());
            } catch(FormatException f) {
                Console.WriteLine("Invalid date");
                birth = DateTime.Now;
            }
            Console.WriteLine("\n\n What is the User email ?:");
            String email = Console.ReadLine();
            var id = Program.GenId(Program.PersonList);
            return Person.getPerson(id, title, comments, birth, null, email); 
        }

        public static void ListPersons(List<Person> persons) {
            if(persons.Count < 0) {
                Console.WriteLine("List is empty");
                return;
            }
            Console.WriteLine("Users List: ");
            persons.ForEach(item => {
                if(!item.Removed)
                    Console.WriteLine("\n\tId: {0}\tTitle: {1}", item.Id, item.Title);
            });
        }

        public static void UpdatePerson(List<Person> persons) {
            Console.WriteLine("____________ Update User ____________");
            Program.ListPersons(persons);
            Console.WriteLine("\n\nPlase type the user id that you want to update: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = persons.FindIndex( item => item.Id == Id);
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

        public static void DeletePerson(List<Person> persons) {
            Console.WriteLine("____________ Delete User ____________");
            Program.ListPersons(persons);
            Console.WriteLine("\n\nPlase type the user id that you want to delete: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = persons.FindIndex( item => item.Id == Id);
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

        /*Task*/

        public static Task CreateTask(){
            Console.WriteLine("____________ Create Task ____________");
            Console.WriteLine("\n\n What is the Task name ?: ");
            String title = Console.ReadLine();
            Console.WriteLine("\n\n Give me a little description about this Task: ");
            String comments = Console.ReadLine();
            Console.WriteLine("\n\nWhat is the workload of this task ?: ");
            float workload = float.Parse(Console.ReadLine());
            var id = Program.GenId(Program.TaskList);
            Console.WriteLine("\nWhat is the task type ?:");
            Console.WriteLine("\n\t1. Code");
            Console.WriteLine("\n\t2. Test case");
            Console.WriteLine("\n\t3. Bug\n");
            var type = Int32.Parse(Console.ReadLine()) -1;
            return Task.getTask(id, title, comments, workload, (ETaskType) type);
        }

        public static void ListTasks(List<Task> tasks) {
            if(tasks.Count < 0) {
                Console.WriteLine("List is empty");
                return;
            }
            Console.WriteLine("Task List: ");
            tasks.ForEach(item => {
                if(!item.Removed)
                    Console.WriteLine("\n\tId: {0}\tTitle: {1}", item.Id, item.Title);
            });
        }

        public static void UpdateTask(List<Task> tasks) {
            Console.WriteLine("____________ Update Task ____________");
            Program.ListTasks(tasks);
            Console.WriteLine("\n\nPlase type the task id that you want to update: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = tasks.FindIndex( item => item.Id == Id);
            Console.Clear();
            Console.WriteLine("Task Selected : \n\n");
            tasks[index].Print();   
            Console.WriteLine("\n\nChoose which you want to update: ");
            Console.WriteLine("\n\t1. Name");
            Console.WriteLine("\n\t2. Description");
            Console.WriteLine("\n\t3. Workload");
            var selected = Int32.Parse(Console.ReadLine());
            switch (selected) {
                case 1:
                    Console.WriteLine("What is the new name ?: ");
                    tasks[index].Title = Console.ReadLine();
                    break;
                case 2:
                    Console.WriteLine("What is the new description ?: ");
                    tasks[index].Comments = Console.ReadLine();;
                    break;
                case 3:
                    Console.WriteLine("What is the new workload ?: ");
                    tasks[index].WorkHours = float.Parse(Console.ReadLine());
                    break;
                default:
                    Console.WriteLine("Invalid Option !!!");
                    break;
            } 
        }

        public static void DeleteTask(List<Task> tasks) {
            Console.WriteLine("____________ Delete Task ____________");
            Program.ListTasks(tasks);
            Console.WriteLine("\n\nPlase type the task id that you want to delete: ");
            Int32 Id = Int32.Parse(Console.ReadLine());
            int index = tasks.FindIndex( item => item.Id == Id );
            Console.Clear();
            Console.WriteLine("Task Selected : \n\n");
            tasks[index].Print();
            Console.WriteLine("\n\nDo you really want to delete it ?:");
            Console.WriteLine("\n\t1. Yes");
            Console.WriteLine("\n\t2. No");
            Int32 selected = Int32.Parse(Console.ReadLine());
            switch(selected){
                case 1 : 
                    Console.WriteLine("\n\nTask Removed");
                    tasks[index].SetRemoved();
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

        public static Int32 GenId(dynamic array) {
            return  array.Count;
        }

    }
}
