import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export const Notfound=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
        <Card>
            <CardHeader>
                <CardTitle>
                    404 NOT FOUND
                </CardTitle>
                <CardDescription>
                    The page you are looking does not exist
                </CardDescription>
            </CardHeader>
            <CardContent>
                <img
                  className="rounded-lg shadow-lg"
                  src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
                  />
                  <Button
                    variant="outline"
                    onClick={()=>navigate(-1)}
                    className="mt-4"
                    >
                    Go Back
                  </Button>
            </CardContent>
        </Card>

        </div>
    )
}