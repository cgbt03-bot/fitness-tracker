{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 .SFNSMono-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs21 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import React, \{ useState, useEffect, useRef \} from "react";\
\
// Simple utility function\
const cn = (...classes: (string | boolean | undefined)[]) => \
  classes.filter(Boolean).join(" ");\
\
// Simple Button component\
const Button = React.forwardRef<\
  HTMLButtonElement,\
  React.ButtonHTMLAttributes<HTMLButtonElement> & \{\
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";\
    size?: "default" | "sm" | "lg";\
  \}\
>((\{ className, variant = "default", size = "default", ...props \}, ref) => \{\
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";\
  \
  const variantClasses = \{\
    default: "bg-blue-500 text-white hover:bg-blue-600",\
    destructive: "bg-red-500 text-white hover:bg-red-600",\
    outline: "border border-gray-300 bg-white hover:bg-gray-100",\
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",\
    ghost: "hover:bg-gray-100",\
    link: "underline-offset-4 hover:underline text-blue-500"\
  \};\
  \
  const sizeClasses = \{\
    default: "h-10 py-2 px-4",\
    sm: "h-9 px-3 rounded-md",\
    lg: "h-11 px-8 rounded-md"\
  \};\
  \
  return (\
    <button\
      className=\{cn(\
        baseClasses,\
        variantClasses[variant],\
        sizeClasses[size],\
        className\
      )\}\
      ref=\{ref\}\
      \{...props\}\
    />\
  );\
\});\
Button.displayName = "Button";\
\
// Simple Card components\
const Card = React.forwardRef<\
  HTMLDivElement,\
  React.HTMLAttributes<HTMLDivElement>\
>((\{ className, ...props \}, ref) => (\
  <div\
    ref=\{ref\}\
    className=\{cn(\
      "rounded-lg border bg-white text-card-foreground shadow-sm",\
      className\
    )\}\
    \{...props\}\
  />\
));\
Card.displayName = "Card";\
\
const CardHeader = React.forwardRef<\
  HTMLDivElement,\
  React.HTMLAttributes<HTMLDivElement>\
>((\{ className, ...props \}, ref) => (\
  <div\
    ref=\{ref\}\
    className=\{cn("flex flex-col space-y-1.5 p-6", className)\}\
    \{...props\}\
  />\
));\
CardHeader.displayName = "CardHeader";\
\
const CardTitle = React.forwardRef<\
  HTMLParagraphElement,\
  React.HTMLAttributes<HTMLHeadingElement>\
>((\{ className, ...props \}, ref) => (\
  <h3\
    ref=\{ref\}\
    className=\{cn(\
      "text-2xl font-semibold leading-none tracking-tight",\
      className\
    )\}\
    \{...props\}\
  />\
));\
CardTitle.displayName = "CardTitle";\
\
const CardDescription = React.forwardRef<\
  HTMLParagraphElement,\
  React.HTMLAttributes<HTMLParagraphElement>\
>((\{ className, ...props \}, ref) => (\
  <p\
    ref=\{ref\}\
    className=\{cn("text-sm text-gray-500", className)\}\
    \{...props\}\
  />\
));\
CardDescription.displayName = "CardDescription";\
\
const CardContent = React.forwardRef<\
  HTMLDivElement,\
  React.HTMLAttributes<HTMLDivElement>\
>((\{ className, ...props \}, ref) => (\
  <div ref=\{ref\} className=\{cn("p-6 pt-0", className)\} \{...props\} />\
));\
CardContent.displayName = "CardContent";\
\
// Simple Input component\
const Input = React.forwardRef<\
  HTMLInputElement,\
  React.InputHTMLAttributes<HTMLInputElement>\
>((\{ className, type, ...props \}, ref) => \{\
  return (\
    <input\
      type=\{type\}\
      className=\{cn(\
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\
        className\
      )\}\
      ref=\{ref\}\
      \{...props\}\
    />\
  );\
\});\
Input.displayName = "Input";\
\
// Simple Textarea component\
const Textarea = React.forwardRef<\
  HTMLTextAreaElement,\
  React.TextareaHTMLAttributes<HTMLTextAreaElement>\
>((\{ className, ...props \}, ref) => \{\
  return (\
    <textarea\
      className=\{cn(\
        "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\
        className\
      )\}\
      ref=\{ref\}\
      \{...props\}\
    />\
  );\
\});\
Textarea.displayName = "Textarea";\
\
// Simple Label component\
const Label = React.forwardRef<\
  HTMLLabelElement,\
  React.LabelHTMLAttributes<HTMLLabelElement>\
>((\{ className, ...props \}, ref) => (\
  <label\
    ref=\{ref\}\
    className=\{cn(\
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",\
      className\
    )\}\
    \{...props\}\
  />\
));\
Label.displayName = "Label";\
\
// Simple Select components\
const Select = (\{ value, onValueChange, children \}: \{ \
  value: string; \
  onValueChange: (value: string) => void; \
  children: React.ReactNode;\
\}) => \{\
  return (\
    <div className="relative">\
      \{React.Children.map(children, (child) => \
        React.cloneElement(child as React.ReactElement, \{ \
          value, \
          onValueChange \
        \})\
      )\}\
    </div>\
  );\
\};\
\
const SelectTrigger = React.forwardRef<\
  HTMLButtonElement,\
  React.ButtonHTMLAttributes<HTMLButtonElement>\
>((\{ className, children, ...props \}, ref) => (\
  <Button\
    ref=\{ref\}\
    className=\{cn(\
      "w-full justify-between bg-white hover:bg-gray-50",\
      className\
    )\}\
    \{...props\}\
  >\
    \{children\}\
    <span className="ml-2">\uc0\u9660 </span>\
  </Button>\
));\
SelectTrigger.displayName = "SelectTrigger";\
\
const SelectValue = (\{ placeholder \}: \{ placeholder?: string \}) => (\
  <span className="text-gray-500">\{placeholder\}</span>\
);\
\
const SelectContent = (\{ children \}: \{ children: React.ReactNode \}) => (\
  <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200">\
    <div className="py-1">\{children\}</div>\
  </div>\
);\
\
const SelectItem = (\{ value, children, onValueChange \}: \{ \
  value: string; \
  children: React.ReactNode;\
  onValueChange?: (value: string) => void;\
\}) => (\
  <button\
    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"\
    onClick=\{() => onValueChange && onValueChange(value)\}\
  >\
    \{children\}\
  </button>\
);\
\
// Icons\
const Plus = (\{ className \}: \{ className?: string \}) => (\
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=\{className\}>\
    <line x1="12" y1="5" x2="12" y2="19"></line>\
    <line x1="5" y1="12" x2="19" y2="12"></line>\
  </svg>\
);\
\
const Trash = (\{ className \}: \{ className?: string \}) => (\
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=\{className\}>\
    <polyline points="3 6 5 6 21 6"></polyline>\
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>\
  </svg>\
);\
\
const Play = (\{ className \}: \{ className?: string \}) => (\
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=\{className\}>\
    <polygon points="5 3 19 12 5 21 5 3"></polygon>\
  </svg>\
);\
\
const Square = (\{ className \}: \{ className?: string \}) => (\
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=\{className\}>\
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>\
  </svg>\
);\
\
const Calendar = (\{ className \}: \{ className?: string \}) => (\
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=\{className\}>\
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\
    <line x1="16" y1="2" x2="16" y2="6"></line>\
    <line x1="8" y1="2" x2="8" y2="6"></line>\
    <line x1="3" y1="10" x2="21" y2="10"></line>\
  </svg>\
);\
\
// Data structures\
interface Set \{\
  id: string;\
  weight: number;\
  reps: number;\
\}\
\
interface Exercise \{\
  id: string;\
  name: string;\
  sets: Set[];\
\}\
\
interface Workout \{\
  id: string;\
  date: Date;\
  duration: number; // in seconds\
  exercises: Exercise[];\
  notes: string;\
\}\
\
// Common exercises for the dropdown\
const COMMON_EXERCISES = [\
  "Bench Press",\
  "Squat",\
  "Deadlift",\
  "Overhead Press",\
  "Barbell Row",\
  "Pull-ups",\
  "Dips",\
  "Lunges",\
  "Bicep Curls",\
  "Tricep Extensions",\
  "Leg Press",\
  "Lat Pulldown",\
  "Chest Fly",\
  "Shoulder Fly",\
  "Crunches"\
];\
\
const FitnessTracker = () => \{\
  // State management\
  const [workouts, setWorkouts] = useState<Workout[]>([]);\
  const [activeTab, setActiveTab] = useState<"log" | "history">("log");\
  const [timerActive, setTimerActive] = useState(false);\
  const [timerSeconds, setTimerSeconds] = useState(0);\
  const timerRef = useRef<NodeJS.Timeout | null>(null);\
  \
  // Form state\
  const [selectedExercise, setSelectedExercise] = useState("");\
  const [customExercise, setCustomExercise] = useState("");\
  const [exercises, setExercises] = useState<Exercise[]>([]);\
  const [notes, setNotes] = useState("");\
  \
  // Initialize from localStorage\
  useEffect(() => \{\
    const savedWorkouts = localStorage.getItem("fitnessWorkouts");\
    if (savedWorkouts) \{\
      try \{\
        const parsed = JSON.parse(savedWorkouts);\
        // Convert date strings back to Date objects\
        const workoutsWithDates = parsed.map((workout: any) => (\{\
          ...workout,\
          date: new Date(workout.date)\
        \}));\
        setWorkouts(workoutsWithDates);\
      \} catch (e) \{\
        console.error("Failed to parse workouts", e);\
      \}\
    \}\
  \}, []);\
  \
  // Save to localStorage when workouts change\
  useEffect(() => \{\
    localStorage.setItem("fitnessWorkouts", JSON.stringify(workouts));\
  \}, [workouts]);\
  \
  // Timer functionality\
  useEffect(() => \{\
    if (timerActive) \{\
      timerRef.current = setInterval(() => \{\
        setTimerSeconds(prev => prev + 1);\
      \}, 1000);\
    \} else if (timerRef.current) \{\
      clearInterval(timerRef.current);\
    \}\
    \
    return () => \{\
      if (timerRef.current) \{\
        clearInterval(timerRef.current);\
      \}\
    \};\
  \}, [timerActive]);\
  \
  // Format time for display\
  const formatTime = (seconds: number) => \{\
    const mins = Math.floor(seconds / 60);\
    const secs = seconds % 60;\
    return `$\{mins.toString().padStart(2, "0")\}:$\{secs.toString().padStart(2, "0")\}`;\
  \};\
  \
  // Handle exercise selection\
  const handleExerciseSelect = (value: string) => \{\
    if (value === "custom") \{\
      setSelectedExercise("custom");\
    \} else \{\
      setSelectedExercise(value);\
      addExercise(value);\
    \}\
  \};\
  \
  // Add a new exercise to the workout\
  const addExercise = (name: string) => \{\
    if (!name.trim()) return;\
    \
    const newExercise: Exercise = \{\
      id: Date.now().toString(),\
      name,\
      sets: [\
        \{ id: Date.now().toString() + "-1", weight: 0, reps: 0 \}\
      ]\
    \};\
    \
    setExercises(prev => [...prev, newExercise]);\
    setSelectedExercise("");\
    setCustomExercise("");\
  \};\
  \
  // Add a new set to an exercise\
  const addSet = (exerciseId: string) => \{\
    setExercises(prev => \
      prev.map(exercise => \
        exercise.id === exerciseId \
          ? \{\
              ...exercise,\
              sets: [\
                ...exercise.sets,\
                \{ id: Date.now().toString(), weight: 0, reps: 0 \}\
              ]\
            \}\
          : exercise\
      )\
    );\
  \};\
  \
  // Remove a set from an exercise\
  const removeSet = (exerciseId: string, setId: string) => \{\
    setExercises(prev => \
      prev.map(exercise => \
        exercise.id === exerciseId \
          ? \{\
              ...exercise,\
              sets: exercise.sets.filter(set => set.id !== setId)\
            \}\
          : exercise\
      )\
    );\
  \};\
  \
  // Update set values\
  const updateSet = (exerciseId: string, setId: string, field: keyof Set, value: string) => \{\
    const numValue = field === "weight" || field === "reps" ? Number(value) : value;\
    \
    setExercises(prev => \
      prev.map(exercise => \
        exercise.id === exerciseId \
          ? \{\
              ...exercise,\
              sets: exercise.sets.map(set => \
                set.id === setId ? \{ ...set, [field]: numValue \} : set\
              )\
            \}\
          : exercise\
      )\
    );\
  \};\
  \
  // Remove an exercise\
  const removeExercise = (exerciseId: string) => \{\
    setExercises(prev => prev.filter(ex => ex.id !== exerciseId));\
  \};\
  \
  // Save workout\
  const saveWorkout = () => \{\
    if (exercises.length === 0) return;\
    \
    const workout: Workout = \{\
      id: Date.now().toString(),\
      date: new Date(),\
      duration: timerSeconds,\
      exercises,\
      notes\
    \};\
    \
    setWorkouts(prev => [workout, ...prev]);\
    resetForm();\
  \};\
  \
  // Reset form\
  const resetForm = () => \{\
    setExercises([]);\
    setNotes("");\
    setTimerSeconds(0);\
    setTimerActive(false);\
  \};\
  \
  // Calculate workout statistics\
  const calculateStats = () => \{\
    const totalWorkouts = workouts.length;\
    const totalDuration = workouts.reduce((sum, workout) => sum + workout.duration, 0);\
    const avgDuration = totalWorkouts > 0 ? Math.round(totalDuration / totalWorkouts) : 0;\
    \
    return \{ totalWorkouts, avgDuration \};\
  \};\
  \
  // Prepare data for charts\
  const prepareChartData = () => \{\
    // Group workouts by date (last 7 days)\
    const last7Days: \{ date: string; count: number \}[] = [];\
    const today = new Date();\
    \
    for (let i = 6; i >= 0; i--) \{\
      const date = new Date(today);\
      date.setDate(date.getDate() - i);\
      const dateStr = date.toISOString().split('T')[0];\
      last7Days.push(\{ date: dateStr, count: 0 \});\
    \}\
    \
    workouts.forEach(workout => \{\
      const workoutDate = workout.date.toISOString().split('T')[0];\
      const dayEntry = last7Days.find(day => day.date === workoutDate);\
      if (dayEntry) \{\
        dayEntry.count += 1;\
      \}\
    \});\
    \
    // Prepare exercise progress data\
    const exerciseProgress: Record<string, \{ date: string; maxWeight: number \}[]> = \{\};\
    \
    workouts.forEach(workout => \{\
      const workoutDate = workout.date.toLocaleDateString('en-US', \{ month: 'short', day: 'numeric' \});\
      \
      workout.exercises.forEach(exercise => \{\
        if (!exerciseProgress[exercise.name]) \{\
          exerciseProgress[exercise.name] = [];\
        \}\
        \
        // Find max weight for this exercise in this workout\
        const maxWeight = Math.max(...exercise.sets.map(set => set.weight), 0);\
        exerciseProgress[exercise.name].push(\{ date: workoutDate, maxWeight \});\
      \});\
    \});\
    \
    // Keep only exercises with multiple data points\
    const filteredProgress = Object.fromEntries(\
      Object.entries(exerciseProgress).filter(([_, data]) => data.length > 1)\
    );\
    \
    return \{ workoutFrequency: last7Days, exerciseProgress: filteredProgress \};\
  \};\
  \
  const stats = calculateStats();\
  const chartData = prepareChartData();\
  \
  return (\
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-6">\
      <div className="max-w-6xl mx-auto">\
        <header className="mb-8 text-center">\
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Fitness Tracker</h1>\
          <p className="text-gray-600 mt-2">Log your workouts and track your progress</p>\
        </header>\
        \
        \{/* Tab Navigation */\}\
        <div className="flex mb-6 bg-white rounded-lg shadow p-1">\
          <button\
            className=\{`flex-1 py-3 px-4 rounded-md text-center font-medium transition-colors $\{\
              activeTab === "log"\
                ? "bg-blue-500 text-white"\
                : "text-gray-600 hover:bg-gray-100"\
            \}`\}\
            onClick=\{() => setActiveTab("log")\}\
          >\
            Log Workout\
          </button>\
          <button\
            className=\{`flex-1 py-3 px-4 rounded-md text-center font-medium transition-colors $\{\
              activeTab === "history"\
                ? "bg-blue-500 text-white"\
                : "text-gray-600 hover:bg-gray-100"\
            \}`\}\
            onClick=\{() => setActiveTab("history")\}\
          >\
            History & Progress\
          </button>\
        </div>\
        \
        \{/* Log Workout Tab */\}\
        \{activeTab === "log" && (\
          <div className="space-y-6">\
            <Card>\
              <CardHeader>\
                <CardTitle>New Workout</CardTitle>\
                <CardDescription>Log your exercises and track your progress</CardDescription>\
              </CardHeader>\
              <CardContent className="space-y-6">\
                \{/* Timer */\}\
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">\
                  <div className="flex items-center space-x-2">\
                    <Calendar className="text-blue-500" />\
                    <span className="font-medium">Workout Duration</span>\
                  </div>\
                  <div className="flex items-center space-x-3">\
                    <span className="text-2xl font-mono">\{formatTime(timerSeconds)\}</span>\
                    <Button\
                      size="sm"\
                      variant=\{timerActive ? "destructive" : "default"\}\
                      onClick=\{() => setTimerActive(!timerActive)\}\
                    >\
                      \{timerActive ? (\
                        <>\
                          <Square className="w-4 h-4 mr-2" />\
                          Stop\
                        </>\
                      ) : (\
                        <>\
                          <Play className="w-4 h-4 mr-2" />\
                          Start\
                        </>\
                      )\}\
                    </Button>\
                  </div>\
                </div>\
                \
                \{/* Exercise Selection */\}\
                <div>\
                  <Label className="mb-2 block">Add Exercise</Label>\
                  <div className="flex flex-col sm:flex-row gap-2">\
                    <Select value=\{selectedExercise\} onValueChange=\{handleExerciseSelect\}>\
                      <SelectTrigger className="flex-1">\
                        <span className="text-gray-500">\
                          \{selectedExercise || "Select exercise"\}\
                        </span>\
                      </SelectTrigger>\
                      <SelectContent>\
                        \{COMMON_EXERCISES.map(exercise => (\
                          <SelectItem \
                            key=\{exercise\} \
                            value=\{exercise\}\
                            onValueChange=\{handleExerciseSelect\}\
                          >\
                            \{exercise\}\
                          </SelectItem>\
                        ))\}\
                        <SelectItem \
                          value="custom" \
                          onValueChange=\{handleExerciseSelect\}\
                        >\
                          + Custom Exercise\
                        </SelectItem>\
                      </SelectContent>\
                    </Select>\
                    \
                    \{selectedExercise === "custom" && (\
                      <div className="flex gap-2 flex-1">\
                        <Input\
                          placeholder="Exercise name"\
                          value=\{customExercise\}\
                          onChange=\{(e) => setCustomExercise(e.target.value)\}\
                        />\
                        <Button \
                          onClick=\{() => addExercise(customExercise)\}\
                          disabled=\{!customExercise.trim()\}\
                        >\
                          Add\
                        </Button>\
                      </div>\
                    )\}\
                  </div>\
                </div>\
                \
                \{/* Exercises List */\}\
                <div className="space-y-4">\
                  \{exercises.map((exercise) => (\
                    <Card key=\{exercise.id\} className="overflow-hidden">\
                      <div className="flex justify-between items-center p-4 bg-gray-50 border-b">\
                        <h3 className="font-semibold">\{exercise.name\}</h3>\
                        <Button\
                          size="sm"\
                          variant="ghost"\
                          onClick=\{() => removeExercise(exercise.id)\}\
                        >\
                          <Trash className="w-4 h-4" />\
                        </Button>\
                      </div>\
                      \
                      <CardContent className="p-4">\
                        <div className="grid grid-cols-12 gap-2 mb-2 text-sm font-medium text-gray-500">\
                          <div className="col-span-5">Weight (lbs)</div>\
                          <div className="col-span-5">Reps</div>\
                          <div className="col-span-2"></div>\
                        </div>\
                        \
                        \{exercise.sets.map((set) => (\
                          <div key=\{set.id\} className="grid grid-cols-12 gap-2 mb-2">\
                            <div className="col-span-5">\
                              <Input\
                                type="number"\
                                min="0"\
                                value=\{set.weight || ""\}\
                                onChange=\{(e) => updateSet(exercise.id, set.id, "weight", e.target.value)\}\
                                placeholder="Weight"\
                              />\
                            </div>\
                            <div className="col-span-5">\
                              <Input\
                                type="number"\
                                min="0"\
                                value=\{set.reps || ""\}\
                                onChange=\{(e) => updateSet(exercise.id, set.id, "reps", e.target.value)\}\
                                placeholder="Reps"\
                              />\
                            </div>\
                            <div className="col-span-2">\
                              <Button\
                                size="sm"\
                                variant="ghost"\
                                onClick=\{() => removeSet(exercise.id, set.id)\}\
                              >\
                                <Trash className="w-4 h-4" />\
                              </Button>\
                            </div>\
                          </div>\
                        ))\}\
                        \
                        <Button\
                          size="sm"\
                          variant="outline"\
                          onClick=\{() => addSet(exercise.id)\}\
                          className="mt-2"\
                        >\
                          <Plus className="w-4 h-4 mr-2" />\
                          Add Set\
                        </Button>\
                      </CardContent>\
                    </Card>\
                  ))\}\
                </div>\
                \
                \{/* Notes */\}\
                <div>\
                  <Label htmlFor="notes">Workout Notes</Label>\
                  <Textarea\
                    id="notes"\
                    placeholder="How did you feel? Any observations?"\
                    value=\{notes\}\
                    onChange=\{(e) => setNotes(e.target.value)\}\
                    rows=\{3\}\
                  />\
                </div>\
                \
                \{/* Action Buttons */\}\
                <div className="flex justify-end space-x-3">\
                  <Button variant="outline" onClick=\{resetForm\}>\
                    Reset\
                  </Button>\
                  <Button \
                    onClick=\{saveWorkout\}\
                    disabled=\{exercises.length === 0\}\
                  >\
                    Save Workout\
                  </Button>\
                </div>\
              </CardContent>\
            </Card>\
          </div>\
        )\}\
        \
        \{/* History & Progress Tab */\}\
        \{activeTab === "history" && (\
          <div className="space-y-6">\
            \{/* Stats Summary */\}\
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\
              <Card>\
                <CardContent className="p-6">\
                  <div className="flex items-center">\
                    <div className="p-3 bg-blue-100 rounded-full mr-4">\
                      <Calendar className="text-blue-500" />\
                    </div>\
                    <div>\
                      <p className="text-sm text-gray-500">Total Workouts</p>\
                      <p className="text-3xl font-bold">\{stats.totalWorkouts\}</p>\
                    </div>\
                  </div>\
                </CardContent>\
              </Card>\
              \
              <Card>\
                <CardContent className="p-6">\
                  <div className="flex items-center">\
                    <div className="p-3 bg-green-100 rounded-full mr-4">\
                      <Play className="text-green-500" />\
                    </div>\
                    <div>\
                      <p className="text-sm text-gray-500">Avg. Duration</p>\
                      <p className="text-3xl font-bold">\{formatTime(stats.avgDuration)\}</p>\
                    </div>\
                  </div>\
                </CardContent>\
              </Card>\
            </div>\
            \
            \{/* Workout History */\}\
            <Card>\
              <CardHeader>\
                <CardTitle>Workout History</CardTitle>\
                <CardDescription>Your recent workouts</CardDescription>\
              </CardHeader>\
              <CardContent>\
                \{workouts.length === 0 ? (\
                  <div className="text-center py-8 text-gray-500">\
                    No workouts logged yet. Start by logging your first workout!\
                  </div>\
                ) : (\
                  <div className="space-y-4">\
                    \{workouts.map((workout) => (\
                      <Card key=\{workout.id\}>\
                        <CardContent className="p-4">\
                          <div className="flex justify-between items-start">\
                            <div>\
                              <h3 className="font-semibold">\
                                \{workout.date.toLocaleDateString('en-US', \{ \
                                  weekday: 'long', \
                                  year: 'numeric', \
                                  month: 'long', \
                                  day: 'numeric' \
                                \})\}\
                              </h3>\
                              <p className="text-sm text-gray-500">\
                                Duration: \{formatTime(workout.duration)\}\
                              </p>\
                            </div>\
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">\
                              \{workout.exercises.length\} exercises\
                            </span>\
                          </div>\
                          \
                          <div className="mt-3">\
                            <div className="flex flex-wrap gap-2">\
                              \{workout.exercises.map((exercise) => (\
                                <span \
                                  key=\{exercise.id\} \
                                  className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"\
                                >\
                                  \{exercise.name\}\
                                </span>\
                              ))\}\
                            </div>\
                          </div>\
                          \
                          \{workout.notes && (\
                            <div className="mt-3 p-3 bg-gray-50 rounded text-sm">\
                              <p className="font-medium mb-1">Notes:</p>\
                              <p>\{workout.notes\}</p>\
                            </div>\
                          )\}\
                        </CardContent>\
                      </Card>\
                    ))\}\
                  </div>\
                )\}\
              </CardContent>\
            </Card>\
          </div>\
        )\}\
      </div>\
    </div>\
  );\
\};\
\
export default FitnessTracker;\
}