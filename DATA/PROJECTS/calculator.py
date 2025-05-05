import tkinter

w = tkinter.Tk()
w.title("MILAN_27113")

w.minsize(590,500)
w.maxsize(590,500)

w.configure(bg="#040720")

textresult = tkinter.StringVar()

# Arithmetic functions
def add():
    m = int(e1.get()) + int(e2.get())
    textresult.set(m)

def subtract():
    m = int(e1.get()) - int(e2.get())
    textresult.set(m)

def multiply():
    m = int(e1.get()) * int(e2.get())
    textresult.set(m)

def divide():
    m = int(e1.get()) / int(e2.get())
    textresult.set(m)

def clear():
    e1.delete(0, tkinter.END)
    e2.delete(0, tkinter.END)
    textresult.set("")

def set_focus(entry):
    focused_entry["entry"] = entry

def insert_value(value):
    entry = focused_entry["entry"]
    if entry:
        entry.insert(tkinter.END, value)

focused_entry = {"entry": None}

e1 = tkinter.Entry(w, bg="lightgrey", font=("arial", 20), justify="center",width=15)
e1.grid(row=0, column=0,pady=(10, 0),padx=(20,0), columnspan=2)
e1.bind("<FocusIn>", lambda event: set_focus(e1)) 

l1 = tkinter.Label(w, text="FIRST NUMBER", bg="#040720", fg="white", font=("arial", 20),width=20)
l1.grid(row=0, column=2,pady=(10, 0), columnspan=3)

e2 = tkinter.Entry(w, bg="lightgrey", font=("arial", 20), justify="center",width=15)
e2.grid(row=1, column=0,pady=(10, 10),padx=(20,0), columnspan=2)
e2.bind("<FocusIn>", lambda event: set_focus(e2))

l2 = tkinter.Label(w, text="SECOND NUMBER", bg="#040720", fg="white", font=("arial", 20),width=20)
l2.grid(row=1, column=2,pady=(10, 0), columnspan=3)

e3 = tkinter.Entry(w, bg="lightgrey", font=("arial", 20), textvariable=textresult, state='readonly', justify="center",width=15)
e3.grid(row=2, column=0,pady=(10, 10),padx=(20,0), columnspan=2)
e3.bind("<FocusIn>", lambda event: set_focus(e3))

l3 = tkinter.Label(w, text="RESULT", bg="#040720", fg="white", font=("arial", 20),width=20)
l3.grid(row=2, column=2,pady=(10, 0), columnspan=3)

# Buttons
b1 = tkinter.Button(w, text="1", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("1"))
b1.grid(row=3, column=0,pady=(10, 0))

b2 = tkinter.Button(w, text="2", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("2"))
b2.grid(row=3, column=1,pady=(10, 0))

b3 = tkinter.Button(w, text="3", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("3"))
b3.grid(row=3, column=2,pady=(10, 0))

b4 = tkinter.Button(w, text="4", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("4"))
b4.grid(row=3, column=3,pady=(10, 0))

b5 = tkinter.Button(w, text="5", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("5"))
b5.grid(row=3, column=4,pady=(10, 0))

b6 = tkinter.Button(w, text="6", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("6"))
b6.grid(row=4, column=0,pady=(10, 0))

b7 = tkinter.Button(w, text="7", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("7"))
b7.grid(row=4, column=1,pady=(10, 0))

b8 = tkinter.Button(w, text="8", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("8"))
b8.grid(row=4, column=2,pady=(10, 0))

b9 = tkinter.Button(w, text="9", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("9"))
b9.grid(row=4, column=3,pady=(10, 0))

b10 = tkinter.Button(w, text="0", bd="20", activebackground="red", font=("arial", 20), command=lambda: insert_value("0"))
b10.grid(row=4, column=4,pady=(10, 0))

# Operator buttons
b11 = tkinter.Button(w, text="+", bd="20", activebackground="red", font=("arial", 20), command=add)
b11.grid(row=5, column=0,pady=(10, 0))

b12 = tkinter.Button(w, text="-", bd="20", activebackground="red", font=("arial", 20), command=subtract)
b12.grid(row=5, column=1,pady=(10, 0))

b13 = tkinter.Button(w, text="*", bd="20", activebackground="red", font=("arial", 20), command=multiply)
b13.grid(row=5, column=2,pady=(10, 0))

b14 = tkinter.Button(w, text="/", bd="20", activebackground="red", font=("arial", 20), command=divide)
b14.grid(row=5, column=3,pady=(10, 0))

# Clear button
b15 = tkinter.Button(w, text="C", bd="20", activebackground="red", font=("arial", 20), command=clear)
b15.grid(row=5, column=4,pady=(10, 0))

w.mainloop()
